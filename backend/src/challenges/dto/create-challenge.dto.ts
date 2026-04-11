import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateChallengeDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Sedan' })
  @IsString()
  vehicleType: string;

  @ApiProperty({ example: '30 minutes' })
  @IsString()
  tripDuration: string;

  @ApiPropertyOptional({ example: 'I-95 North' })
  @IsOptional()
  @IsString()
  route?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  agreedToTerms: boolean;
}
