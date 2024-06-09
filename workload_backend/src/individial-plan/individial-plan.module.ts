import { Module } from '@nestjs/common';
import { IndividialPlanService } from './individial-plan.service';
import { IndividialPlanController } from './individial-plan.controller';

@Module({
  controllers: [IndividialPlanController],
  providers: [IndividialPlanService],
})
export class IndividialPlanModule {}
