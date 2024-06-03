import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRupDto } from './create-rup.dto';

export class CreateManyRupDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRupDto)
  @ApiProperty({ type: [CreateRupDto] })
  rups: CreateRupDto[];
}
