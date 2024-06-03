// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @ApiProperty()
  dateBirth: Date;

  @IsNotEmpty()
  @ApiProperty()
  stavka: number;

  @IsString()
  @ApiProperty()
  degree: string;

  @IsString()
  @ApiProperty()
  type: string;

  @ApiProperty()
  role: string[];

  @IsString()
  @ApiProperty()
  numberOfPhone: string;

  @IsNotEmpty()
  @ApiProperty()
  cafedraId: number;
}
