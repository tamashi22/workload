import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { CreateManyGroupDto } from './dto/create-many-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: createGroupDto,
    });
  }

  async createMany(createManyGroupDto: CreateManyGroupDto) {
    const result = await this.prisma.group.createMany({
      data: createManyGroupDto.groups,
    });
    return result;
  }

  findAllByYear(educationYearId: number) {
    return this.prisma.group.findMany({
      where: { educationYearId },
    });
  }

  findOne(id: number) {
    return this.prisma.group.findUnique({
      where: { id },
    });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  remove(id: number) {
    return this.prisma.group.delete({
      where: { id },
    });
  }

  async deleteByYear(educationYearId: number) {
    const result = await this.prisma.group.deleteMany({
      where: { educationYearId },
    });
    return { count: result.count };
  }
}
