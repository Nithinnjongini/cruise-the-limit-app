import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

const STICKER_KIT_PRICE_CENTS = 1499;

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateOrderDto) {
    const totalAmount = dto.quantity * STICKER_KIT_PRICE_CENTS;

    const order = await this.prisma.order.create({
      data: {
        userId,
        quantity: dto.quantity,
        unitPrice: STICKER_KIT_PRICE_CENTS,
        totalAmount,
        shippingName: dto.shippingName,
        shippingAddress: dto.shippingAddress,
        shippingCity: dto.shippingCity,
        shippingState: dto.shippingState,
        shippingZipCode: dto.shippingZipCode,
        shippingCountry: dto.shippingCountry,
      },
    });

    return order;
  }

  async findByUser(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { payment: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { id: true, displayName: true, email: true } },
          payment: true,
        },
      }),
      this.prisma.order.count(),
    ]);

    return {
      data: orders,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, displayName: true, email: true } },
        payment: true,
      },
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.order.update({
      where: { id },
      data: { status: status as any },
    });
  }

  async getStickerPrice() {
    return { unitPriceCents: STICKER_KIT_PRICE_CENTS, currency: 'usd' };
  }
}
