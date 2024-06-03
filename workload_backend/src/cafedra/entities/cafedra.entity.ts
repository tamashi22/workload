import { ApiProperty } from '@nestjs/swagger';
import { Cafedra } from '@prisma/client';

export class CafedraEntity implements Cafedra {
  constructor(partial: Partial<CafedraEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
