import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateRupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  disciplineCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nameOfDiscipline: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  department: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  direction: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  credits: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  hours: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  totalHours: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  independentWorks?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s1Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s1Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s1Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s1Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s2Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s2Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s2Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y1s2Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s3Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s3Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s3Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s3Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s4Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s4Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s4Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y2s4Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s5Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s5Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s5Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s5Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s6Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s6Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s6Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y3s6Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s7Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s7Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s7Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s7Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s8Laboratories?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s8Practical?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s8Credits?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  y4s8Lectures?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  zachet?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  courseWorks?: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  stateExam?: string | null;
  
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  cafedraId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  educationYearId: number;
}
