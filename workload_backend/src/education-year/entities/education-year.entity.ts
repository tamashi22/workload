import { ApiProperty } from '@nestjs/swagger';
import { EducationYear } from '@prisma/client';

export class EducationYearEntity implements EducationYear {
  constructor(partial: Partial<EducationYearEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cafedraId: number;

  
}
