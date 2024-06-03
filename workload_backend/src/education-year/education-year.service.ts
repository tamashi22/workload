import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEducationYearDto } from './dto/create-education-year.dto';
import { UpdateEducationYearDto } from './dto/update-education-year.dto';

@Injectable()
export class EducationYearService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEducationYearDto: CreateEducationYearDto) {
    return this.prisma.educationYear.create({
      data: createEducationYearDto,
    });
  }

  findAll() {
    return this.prisma.educationYear.findMany();
  }

  findOne(id: number) {
    return this.prisma.educationYear.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEducationYearDto: UpdateEducationYearDto) {
    return this.prisma.educationYear.update({
      where: { id },
      data: updateEducationYearDto,
    });
  }

  remove(id: number) {
    return this.prisma.educationYear.delete({
      where: { id },
    });
  }
}
