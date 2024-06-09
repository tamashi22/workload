import { Injectable } from '@nestjs/common';
import { CreateAnnoucementDto } from './dto/create-annoucement.dto';
import { UpdateAnnoucementDto } from './dto/update-annoucement.dto';

@Injectable()
export class AnnoucementService {
  create(createAnnoucementDto: CreateAnnoucementDto) {
    return 'This action adds a new annoucement';
  }

  findAll() {
    return `This action returns all annoucement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annoucement`;
  }

  update(id: number, updateAnnoucementDto: UpdateAnnoucementDto) {
    return `This action updates a #${id} annoucement`;
  }

  remove(id: number) {
    return `This action removes a #${id} annoucement`;
  }
}
