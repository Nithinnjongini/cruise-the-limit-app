import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Partnership Inquiry' })
  @IsString()
  subject: string;

  @ApiProperty({ example: 'I would like to learn more about the challenge.' })
  @IsString()
  message: string;
}
