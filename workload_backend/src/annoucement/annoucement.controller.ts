import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnoucementService } from './annoucement.service';
import { CreateAnnoucementDto } from './dto/create-annoucement.dto';
import { UpdateAnnoucementDto } from './dto/update-annoucement.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('annoucement')
@ApiTags('annoucement')
export class AnnoucementController {
  constructor(private readonly annoucementService: AnnoucementService) {}

  @Post()
  create(@Body() createAnnoucementDto: CreateAnnoucementDto) {
    return this.annoucementService.create(createAnnoucementDto);
  }

  @Get()
  findAll() {
    return this.annoucementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annoucementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnoucementDto: UpdateAnnoucementDto,
  ) {
    return this.annoucementService.update(+id, updateAnnoucementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annoucementService.remove(+id);
  }
}
