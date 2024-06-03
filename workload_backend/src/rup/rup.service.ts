import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRupDto } from './dto/create-rup.dto';
import { UpdateRupDto } from './dto/update-rup.dto';
import { CreateManyRupDto } from './dto/create-many-rup.dto';

@Injectable()
export class RupService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRupDto: CreateRupDto) {
    return this.prisma.rup.create({
      data: createRupDto,
    });
  }

  async createMany(createManyRupDto: CreateManyRupDto) {
    const result = await this.prisma.rup.createMany({
      data: createManyRupDto.rups,
    });
    return result;
  }

  findAllByYear(educationYearId: number, cafedraId: number) {
    return this.prisma.rup.findMany({
      where: {
        educationYearId,
        cafedraId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.rup.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRupDto: UpdateRupDto) {
    return this.prisma.rup.update({
      where: { id },
      data: updateRupDto,
    });
  }

  remove(id: number) {
    return this.prisma.rup.delete({
      where: { id },
    });
  }

  async upsert(createRupDto: CreateRupDto) {
    return this.prisma.rup.upsert({
      where: { disciplineCode: createRupDto.disciplineCode },
      update: createRupDto,
      create: createRupDto,
    });
  }
}
