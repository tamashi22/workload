import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateGroupDto } from './create-group.dto';

export class CreateManyGroupDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateGroupDto)
  @ApiProperty({ type: [CreateGroupDto] })
  groups: CreateGroupDto[];
}
