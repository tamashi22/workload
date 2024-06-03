import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkloadDto } from './dto/create-workload.dto';
import { UpdateWorkloadDto } from './dto/update-workload.dto';

@Injectable()
export class WorkloadService {
  constructor(private readonly prisma: PrismaService) {}

  create(createWorkloadDto: CreateWorkloadDto) {
    return this.prisma.workload.create({
      data: createWorkloadDto,
    });
  }

  findAll(educationYearId?: number, cafedraId?: number) {
    return this.prisma.workload.findMany({
      where: {
        educationYearId: educationYearId,
        cafedraId: cafedraId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.workload.findUnique({
      where: { id },
    });
  }

  update(id: number, updateWorkloadDto: UpdateWorkloadDto) {
    return this.prisma.workload.update({
      where: { id },
      data: updateWorkloadDto,
    });
  }

  remove(id: number) {
    return this.prisma.workload.delete({
      where: { id },
    });
  }

  async createOrUpdate(createWorkloadDto: CreateWorkloadDto) {
    const existingWorkload = await this.prisma.workload.findUnique({
      where: { id: createWorkloadDto.id },
    });

    if (existingWorkload) {
      return this.prisma.workload.update({
        where: { id: createWorkloadDto.id },
        data: createWorkloadDto,
      });
    } else {
      return this.prisma.workload.create({
        data: createWorkloadDto,
      });
    }
  }
}
