import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthProvider, Role } from '../common/constants';

interface OAuthUserData {
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  provider: string;
  providerId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(dto.password, salt);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        firstName: dto.firstName,
        lastName: dto.lastName,
        displayName: dto.displayName || `${dto.firstName} ${dto.lastName}`,
        provider: AuthProvider.LOCAL,
        role: Role.USER,
      },
    });

    const { passwordHash: _, ...userWithoutPassword } = user;
    const tokens = this.generateTokens(user.id, user.email, user.role);

    return { user: userWithoutPassword, ...tokens };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const { passwordHash: _, ...userWithoutPassword } = user;
    const tokens = this.generateTokens(user.id, user.email, user.role);

    return { user: userWithoutPassword, ...tokens };
  }

  async validateOAuthUser(data: OAuthUserData) {
    const provider = data.provider as AuthProvider;

    let user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { provider, providerId: data.providerId },
          { email: data.email },
        ],
      },
    });

    if (user) {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          lastLoginAt: new Date(),
          avatarUrl: data.avatarUrl || user.avatarUrl,
          provider: user.provider === AuthProvider.LOCAL ? user.provider : provider,
          providerId: user.providerId || data.providerId,
        },
      });
    } else {
      user = await this.prisma.user.create({
        data: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          displayName: `${data.firstName} ${data.lastName}`,
          avatarUrl: data.avatarUrl,
          provider,
          providerId: data.providerId,
          emailVerified: true,
          role: Role.USER,
        },
      });
    }

    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRATION', '7d'),
      }),
    };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        challenges: { orderBy: { createdAt: 'desc' }, take: 5 },
        orders: { orderBy: { createdAt: 'desc' }, take: 5 },
      },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
