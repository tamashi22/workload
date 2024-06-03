import { PartialType } from '@nestjs/swagger';
import { CreateRupDto } from './create-rup.dto';

export class UpdateRupDto extends PartialType(CreateRupDto) {}
