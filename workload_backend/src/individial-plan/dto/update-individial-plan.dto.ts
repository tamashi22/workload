import { PartialType } from '@nestjs/swagger';
import { CreateIndividialPlanDto } from './create-individial-plan.dto';

export class UpdateIndividialPlanDto extends PartialType(CreateIndividialPlanDto) {}
