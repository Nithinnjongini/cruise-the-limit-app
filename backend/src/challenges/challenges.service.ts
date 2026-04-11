import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Injectable()
export class ChallengesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string | null, dto: CreateChallengeDto) {
    if (!dto.agreedToTerms) {
      throw new BadRequestException('You must agree to eco-friendly driving terms');
    }

    const challenge = await this.prisma.challenge.create({
      data: {
        ...(userId ? { userId } : {}),
        fullName: dto.fullName,
        email: dto.email,
        vehicleType: dto.vehicleType,
        tripDuration: dto.tripDuration,
        route: dto.route,
        agreedToTerms: dto.agreedToTerms,
      },
      include: { user: { select: { id: true, displayName: true, avatarUrl: true } } },
    });

    return challenge;
  }

  async findByUser(userId: string) {
    return this.prisma.challenge.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [challenges, total] = await Promise.all([
      this.prisma.challenge.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: { select: { id: true, displayName: true, email: true } } },
      }),
      this.prisma.challenge.count(),
    ]);

    return {
      data: challenges,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id },
      include: { user: { select: { id: true, displayName: true, email: true, avatarUrl: true } } },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');
    return challenge;
  }

  async complete(id: string, userId: string) {
    const challenge = await this.prisma.challenge.findFirst({
      where: { id, userId },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');

    return this.prisma.challenge.update({
      where: { id },
      data: { status: 'COMPLETED', completedAt: new Date() },
    });
  }
}
