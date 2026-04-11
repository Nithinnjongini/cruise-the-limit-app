import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { Role } from '../common/constants';

@ApiTags('challenges')
@Controller('challenges')
export class ChallengesController {
  constructor(private challengesService: ChallengesService) {}

  @Post()
  @Public()
  @ApiOperation({ summary: 'Take the Cruise The Limit challenge (login optional)' })
  async create(
    @Body() dto: CreateChallengeDto,
    @Req() req: any,
  ) {
    let userId: string | null = null;
    const authHeader = req.headers?.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const jwt = await import('jsonwebtoken');
        const payload: any = jwt.verify(
          token,
          process.env.JWT_SECRET || '',
        );
        userId = payload.sub || null;
      } catch {
        // Invalid token — proceed as guest
      }
    }
    return this.challengesService.create(userId, dto);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my challenges' })
  async findMy(@CurrentUser('id') userId: string) {
    return this.challengesService.findByUser(userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all challenges (Admin only)' })
  async findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.challengesService.findAll(page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get challenge by ID' })
  async findById(@Param('id') id: string) {
    return this.challengesService.findById(id);
  }

  @Patch(':id/complete')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mark challenge as completed' })
  async complete(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.challengesService.complete(id, userId);
  }
}
