import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IndividialPlanService } from './individial-plan.service';
import { CreateIndividialPlanDto } from './dto/create-individial-plan.dto';
import { UpdateIndividialPlanDto } from './dto/update-individial-plan.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('individial-plan')
@ApiTags('individual-plan')
export class IndividialPlanController {
  constructor(private readonly individialPlanService: IndividialPlanService) {}

  @Post()
  create(@Body() createIndividialPlanDto: CreateIndividialPlanDto) {
    return this.individialPlanService.create(createIndividialPlanDto);
  }

  @Get()
  findAll() {
    return this.individialPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.individialPlanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndividialPlanDto: UpdateIndividialPlanDto,
  ) {
    return this.individialPlanService.update(+id, updateIndividialPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.individialPlanService.remove(+id);
  }
}
