import { Injectable } from '@nestjs/common';
import { CreateIndividialPlanDto } from './dto/create-individial-plan.dto';
import { UpdateIndividialPlanDto } from './dto/update-individial-plan.dto';

@Injectable()
export class IndividialPlanService {
  create(createIndividialPlanDto: CreateIndividialPlanDto) {
    return 'This action adds a new individialPlan';
  }

  findAll() {
    return `This action returns all individialPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} individialPlan`;
  }

  update(id: number, updateIndividialPlanDto: UpdateIndividialPlanDto) {
    return `This action updates a #${id} individialPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} individialPlan`;
  }
}
