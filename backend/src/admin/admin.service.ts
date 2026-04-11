import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboardStats() {
    const [
      totalUsers,
      totalChallenges,
      totalOrders,
      totalRevenue,
      pendingTestimonials,
      unreadMessages,
    ] = await Promise.all([
      this.prisma.user.count({ where: { role: 'USER' } }),
      this.prisma.challenge.count(),
      this.prisma.order.count(),
      this.prisma.payment.aggregate({
        where: { status: 'SUCCEEDED' },
        _sum: { amount: true },
      }),
      this.prisma.testimonial.count({ where: { isApproved: false } }),
      this.prisma.contactMessage.count({ where: { isRead: false } }),
    ]);

    const recentUsers = await this.prisma.user.findMany({
      where: { role: 'USER' },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        email: true,
        displayName: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    const recentOrders = await this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        user: { select: { id: true, displayName: true, email: true } },
        payment: { select: { status: true } },
      },
    });

    const recentChallenges = await this.prisma.challenge.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        user: { select: { id: true, displayName: true } },
      },
    });

    return {
      stats: {
        totalUsers,
        totalChallenges,
        totalOrders,
        totalRevenue: totalRevenue._sum.amount || 0,
        pendingTestimonials,
        unreadMessages,
      },
      recentUsers,
      recentOrders,
      recentChallenges,
    };
  }
}
