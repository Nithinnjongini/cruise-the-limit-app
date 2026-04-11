import { IsString, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 2, description: 'Number of sticker kits' })
  @IsInt()
  @Min(1)
  @Max(50)
  quantity: number;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  shippingName: string;

  @ApiProperty({ example: '123 Main St' })
  @IsString()
  shippingAddress: string;

  @ApiProperty({ example: 'New York' })
  @IsString()
  shippingCity: string;

  @ApiProperty({ example: 'NY' })
  @IsString()
  shippingState: string;

  @ApiProperty({ example: '10001' })
  @IsString()
  shippingZipCode: string;

  @ApiProperty({ example: 'US' })
  @IsString()
  shippingCountry: string;
}
