import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateTestimonialDto) {
    return this.prisma.testimonial.create({
      data: {
        userId,
        content: dto.content,
        rating: dto.rating ?? 5,
        isPublic: dto.isPublic ?? true,
      },
      include: {
        user: { select: { id: true, displayName: true, avatarUrl: true } },
      },
    });
  }

  async findApproved() {
    return this.prisma.testimonial.findMany({
      where: { isApproved: true, isPublic: true },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, displayName: true, avatarUrl: true } },
      },
    });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [testimonials, total] = await Promise.all([
      this.prisma.testimonial.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { id: true, displayName: true, email: true, avatarUrl: true } },
        },
      }),
      this.prisma.testimonial.count(),
    ]);

    return {
      data: testimonials,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findByUser(userId: string) {
    return this.prisma.testimonial.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async approve(id: string) {
    const testimonial = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!testimonial) throw new NotFoundException('Testimonial not found');

    return this.prisma.testimonial.update({
      where: { id },
      data: { isApproved: true },
    });
  }

  async reject(id: string) {
    const testimonial = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!testimonial) throw new NotFoundException('Testimonial not found');

    return this.prisma.testimonial.update({
      where: { id },
      data: { isApproved: false },
    });
  }
}
