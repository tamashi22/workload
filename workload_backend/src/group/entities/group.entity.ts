import { ApiProperty } from '@nestjs/swagger';
import { Group } from '@prisma/client';

export class GroupEntity implements Group {
  constructor(partial: Partial<GroupEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  numberOfStudents: number;

  @ApiProperty()
  course: string;

  @ApiProperty()
  direction: string;

  @ApiProperty()
  scolarshipStudents: number;

  @ApiProperty()
  contractStudents: number;

  @ApiProperty()
  cafedraId: number;

  @ApiProperty()
  educationYearId: number;
}
