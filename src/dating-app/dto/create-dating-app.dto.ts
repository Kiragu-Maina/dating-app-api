import { IsEmail, IsString, MinLength, ValidateNested, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class ProfileCreateDto {
  @ApiProperty({ description: 'The first name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({ description: 'A short bio for the user' })
  @IsString()
  @IsOptional()
  bio?: string;
}

export class CreateDatingAppDto {
  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'Profile details for the user' })
  @ValidateNested()
  @Type(() => ProfileCreateDto)
  profile: ProfileCreateDto; // Match Prisma expected structure
}
