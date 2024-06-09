import { PartialType } from '@nestjs/swagger';
import { CreateAnnoucementDto } from './create-annoucement.dto';

export class UpdateAnnoucementDto extends PartialType(CreateAnnoucementDto) {}
