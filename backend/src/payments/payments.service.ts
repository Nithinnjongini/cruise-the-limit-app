import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(
      this.configService.get<string>('STRIPE_SECRET_KEY', ''),
      { apiVersion: '2023-10-16' },
    );
  }

  async createPaymentIntent(orderId: string, userId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId },
    });

    if (!order) throw new BadRequestException('Order not found');
    if (order.status !== 'PENDING') {
      throw new BadRequestException('Order is not in pending status');
    }

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: order.totalAmount,
      currency: 'usd',
      metadata: { orderId: order.id, userId },
    });

    await this.prisma.payment.create({
      data: {
        userId,
        orderId: order.id,
        stripePaymentId: paymentIntent.id,
        amount: order.totalAmount,
        currency: 'usd',
        status: 'PENDING',
        paymentMethod: 'card',
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  }

  async handleWebhook(payload: Buffer, signature: string) {
    const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET', '');

    let event: Stripe.Event;
    try {
      event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    } catch (err) {
      throw new BadRequestException('Invalid webhook signature');
    }

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await this.handlePaymentSuccess(paymentIntent);
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await this.handlePaymentFailure(paymentIntent);
        break;
      }
    }

    return { received: true };
  }

  private async handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
    const payment = await this.prisma.payment.findUnique({
      where: { stripePaymentId: paymentIntent.id },
    });

    if (!payment) return;

    await this.prisma.$transaction([
      this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'SUCCEEDED',
          receiptUrl: (paymentIntent as any).charges?.data?.[0]?.receipt_url || null,
        },
      }),
      this.prisma.order.update({
        where: { id: payment.orderId },
        data: { status: 'PAID' },
      }),
    ]);
  }

  private async handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
    const payment = await this.prisma.payment.findUnique({
      where: { stripePaymentId: paymentIntent.id },
    });

    if (!payment) return;

    await this.prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: 'FAILED',
        failureReason:
          paymentIntent.last_payment_error?.message || 'Payment failed',
      },
    });
  }

  async getPaymentsByUser(userId: string) {
    return this.prisma.payment.findMany({
      where: { userId },
      include: { order: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
