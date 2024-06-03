import { PartialType } from '@nestjs/swagger';
import { CreateCafedraDto } from './create-cafedra.dto';

export class UpdateCafedraDto extends PartialType(CreateCafedraDto) {}
