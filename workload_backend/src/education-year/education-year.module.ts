import { Module } from '@nestjs/common';
import { EducationYearService } from './education-year.service';
import { EducationYearController } from './education-year.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EducationYearController],
  providers: [EducationYearService],
})
export class EducationYearModule {}
