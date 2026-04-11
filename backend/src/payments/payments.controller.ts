import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Req,
  UseGuards,
  RawBodyRequest,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('create-intent/:orderId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Stripe payment intent for an order' })
  async createPaymentIntent(
    @Param('orderId') orderId: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.paymentsService.createPaymentIntent(orderId, userId);
  }

  @Post('webhook')
  @Public()
  @ApiOperation({ summary: 'Stripe webhook handler' })
  async handleWebhook(@Req() req: RawBodyRequest<Request>) {
    const signature = req.headers['stripe-signature'] as string;
    return this.paymentsService.handleWebhook(req.rawBody!, signature);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my payments' })
  async findMy(@CurrentUser('id') userId: string) {
    return this.paymentsService.getPaymentsByUser(userId);
  }
}
