import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkloadDto } from './create-workload.dto';

export class UpdateWorkloadDto extends PartialType(CreateWorkloadDto) {}
