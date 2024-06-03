import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCafedraDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
