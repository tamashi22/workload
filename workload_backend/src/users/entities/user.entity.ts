// src/users/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  stavka: number;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  dateBirth: Date;

  @ApiProperty()
  degree: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  role: string[];

  @ApiProperty()
  numberOfPhone: string;

  @ApiProperty()
  cafedraId: number;
}
