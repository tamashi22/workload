import { ApiProperty } from '@nestjs/swagger';
import { Rup } from '@prisma/client';

export class RupEntity implements Rup {
  constructor(partial: Partial<RupEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  disciplineCode: string;

  @ApiProperty()
  nameOfDiscipline: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  direction: string;

  @ApiProperty()
  credits: string;

  @ApiProperty()
  hours: string;

  @ApiProperty()
  totalHours: string;

  @ApiProperty({ required: false })
  lectures: string;

  @ApiProperty({ required: false })
  laboratories: string;

  @ApiProperty({ required: false })
  practical: string;

  @ApiProperty({ required: false })
  independentWorks: string;

  @ApiProperty({ required: false })
  y1s1Laboratories: string;

  @ApiProperty({ required: false })
  y1s1Practical: string;

  @ApiProperty({ required: false })
  y1s1Credits: string;

  @ApiProperty({ required: false })
  y1s1Lectures: string;
  @ApiProperty({ required: false })
  y1s2Laboratories: string;

  @ApiProperty({ required: false })
  y1s2Practical: string;

  @ApiProperty({ required: false })
  y1s2Credits: string;

  @ApiProperty({ required: false })
  y1s2Lectures: string;

  @ApiProperty({ required: false })
  y2s3Laboratories: string;

  @ApiProperty({ required: false })
  y2s3Practical: string;

  @ApiProperty({ required: false })
  y2s3Credits: string;

  @ApiProperty({ required: false })
  y2s3Lectures: string;

  @ApiProperty({ required: false })
  y2s4Laboratories: string;

  @ApiProperty({ required: false })
  y2s4Practical: string;

  @ApiProperty({ required: false })
  y2s4Credits: string;

  @ApiProperty({ required: false })
  y2s4Lectures: string;

  @ApiProperty({ required: false })
  y3s5Laboratories: string;

  @ApiProperty({ required: false })
  y3s5Practical: string;

  @ApiProperty({ required: false })
  y3s5Credits: string;

  @ApiProperty({ required: false })
  y3s5Lectures: string;

  @ApiProperty({ required: false })
  y3s6Laboratories: string;

  @ApiProperty({ required: false })
  y3s6Practical: string;

  @ApiProperty({ required: false })
  y3s6Credits: string;

  @ApiProperty({ required: false })
  y3s6Lectures: string;

  @ApiProperty({ required: false })
  y4s7Laboratories: string;

  @ApiProperty({ required: false })
  y4s7Practical: string;

  @ApiProperty({ required: false })
  y4s7Credits: string;

  @ApiProperty({ required: false })
  y4s7Lectures: string;

  @ApiProperty({ required: false })
  y4s8Laboratories: string;

  @ApiProperty({ required: false })
  y4s8Practical: string;

  @ApiProperty({ required: false })
  y4s8Credits: string;

  @ApiProperty({ required: false })
  y4s8Lectures: string;

  @ApiProperty({ required: false })
  zachet: string;

  @ApiProperty({ required: false })
  courseWorks: string;

  @ApiProperty({ required: false })
  stateExam: string;

  @ApiProperty()
  educationYearId: number;

  @ApiProperty()
  cafedraId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
