import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateEducationYearDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{4}$/, { message: 'Year must be in format YYYY-YYYY' })
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  cafedraId: number;
}
