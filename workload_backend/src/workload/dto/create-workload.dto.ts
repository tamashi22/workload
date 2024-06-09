import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateWorkloadDto {
  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  id?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  educationYearId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  rupId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  cafedraId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  discipline: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  group: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  course: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  numberOfStudents: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  numberOfStudentsWithCoef?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  credits: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  semester: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  lectionsByRup?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  lectionsByWorkload?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  practicalByRup?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  practicalByWorkload?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  labaratoriesByRup?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  labaratoriesByWorkload?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  courseWorksByRup?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  courseWorksByAccept?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  courseWorksByManagement?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  consultationsOnline?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  consultationsIndividual?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  consultationsByTeacher?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cheksOfWorks?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cheksByHeadOfCafedra?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  reviewsOfworks?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  eduPractice?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  interships?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  tests?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  exams?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  diplomManagement?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  diplomConsultations?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  diplomReviews?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  diplomExams?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  individualWorks?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  scolarshipStudents?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  contractStudents?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  scolarshipHours?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  contractHours?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  totalWorkloadHours?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  hoursPhond?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  practice?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  lectures?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  laboratories?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  examsColumn?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  other?: number;
  @IsInt()
  @IsOptional()
  @ApiProperty()
  groupId?: number;
}
