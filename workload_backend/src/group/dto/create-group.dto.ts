import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  numberOfStudents: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  course: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  direction: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  scolarshipStudents: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  contractStudents: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  cafedraId: number;

  @IsNotEmpty()
  @ApiProperty()
  educationYearId: number;
}
