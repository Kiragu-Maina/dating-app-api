import { IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProfileDto {
  @ApiProperty({ description: 'The first name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({ description: 'A short bio for the user' })
  @IsString()
  bio?: string;
}
