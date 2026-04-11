import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { Role } from '../common/constants';

@ApiTags('testimonials')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private testimonialsService: TestimonialsService) {}

  @Get('public')
  @Public()
  @ApiOperation({ summary: 'Get approved public testimonials' })
  async findApproved() {
    return this.testimonialsService.findApproved();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Submit a testimonial' })
  async create(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateTestimonialDto,
  ) {
    return this.testimonialsService.create(userId, dto);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my testimonials' })
  async findMy(@CurrentUser('id') userId: string) {
    return this.testimonialsService.findByUser(userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all testimonials (Admin only)' })
  async findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.testimonialsService.findAll(page, limit);
  }

  @Patch(':id/approve')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve a testimonial (Admin only)' })
  async approve(@Param('id') id: string) {
    return this.testimonialsService.approve(id);
  }

  @Patch(':id/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Reject a testimonial (Admin only)' })
  async reject(@Param('id') id: string) {
    return this.testimonialsService.reject(id);
  }
}
