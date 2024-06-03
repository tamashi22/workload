import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCafedraDto } from './dto/create-cafedra.dto';
import { UpdateCafedraDto } from './dto/update-cafedra.dto';

@Injectable()
export class CafedraService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCafedraDto: CreateCafedraDto) {
    return this.prisma.cafedra.create({
      data: createCafedraDto,
    });
  }

  findAll() {
    return this.prisma.cafedra.findMany();
  }

  findOne(id: number) {
    return this.prisma.cafedra.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCafedraDto: UpdateCafedraDto) {
    return this.prisma.cafedra.update({
      where: { id },
      data: updateCafedraDto,
    });
  }

  remove(id: number) {
    return this.prisma.cafedra.delete({
      where: { id },
    });
  }

  async getUsers(cafedraId: number) {
    return this.prisma.user.findMany({
      where: { cafedraId },
    });
  }
}
