import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Workload } from '@prisma/client';

export class WorkloadEntity implements Workload {
  constructor(partial: Partial<WorkloadEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  educationYearId: number;

  @ApiProperty()
  rupId: number;

  @ApiProperty()
  cafedraId: number;

  @ApiProperty()
  discipline: string;

  @ApiProperty()
  group: string;

  @ApiProperty()
  course: string;

  @ApiProperty()
  numberOfStudents: string;

  @ApiProperty()
  numberOfStudentsWithCoef: string | null;

  @ApiProperty()
  credits: string;

  @ApiProperty()
  semester: string;

  @ApiProperty()
  lectionsByRup: string | null;

  @ApiProperty()
  lectionsByWorkload: string | null;

  @ApiProperty()
  practicalByRup: string | null;

  @ApiProperty()
  practicalByWorkload: string | null;

  @ApiProperty()
  labaratoriesByRup: string | null;

  @ApiProperty()
  labaratoriesByWorkload: string | null;

  @ApiProperty()
  courseWorksByRup: string | null;

  @ApiProperty()
  courseWorksByAccept: string | null;

  @ApiProperty()
  courseWorksByManagement: string | null;

  @ApiProperty()
  consultationsOnline: string | null;

  @ApiProperty()
  consultationsIndividual: string | null;

  @ApiProperty()
  consultationsByTeacher: string | null;

  @ApiProperty()
  cheksOfWorks: string | null;

  @ApiProperty()
  cheksByHeadOfCafedra: string | null;

  @ApiProperty()
  reviewsOfworks: string | null;

  @ApiProperty()
  eduPractice: string | null;

  @ApiProperty()
  interships: string | null;

  @ApiProperty()
  tests: string | null;

  @ApiProperty()
  exams: string | null;

  @ApiProperty()
  diplomManagement: string | null;

  @ApiProperty()
  diplomConsultations: string | null;

  @ApiProperty()
  diplomReviews: string | null;

  @ApiProperty()
  diplomExams: string | null;

  @ApiProperty()
  individualWorks: string | null;

  @ApiProperty()
  scolarshipStudents: string | null;

  @ApiProperty()
  contractStudents: string | null;

  @ApiProperty()
  scolarshipHours: string | null;

  @ApiProperty()
  contractHours: string | null;

  @ApiProperty()
  totalWorkloadHours: string | null;

  @ApiPropertyOptional()
  hoursPhond?: string | null;

  @ApiProperty()
  practice: number | null;

  @ApiProperty()
  lectures: number | null;

  @ApiProperty()
  laboratories: number | null;

  @ApiProperty()
  examsColumn: number | null;

  @ApiProperty()
  other: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
