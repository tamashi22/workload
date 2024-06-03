import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { WorkloadService } from './workload.service';
import { CreateWorkloadDto } from './dto/create-workload.dto';
import { UpdateWorkloadDto } from './dto/update-workload.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WorkloadEntity } from './entities/workload.entity';

@Controller('workload')
@ApiTags('workload')
export class WorkloadController {
  constructor(private readonly workloadService: WorkloadService) {}

  @Post()
  @ApiCreatedResponse({ type: WorkloadEntity })
  async create(@Body() createWorkloadDto: CreateWorkloadDto) {
    return new WorkloadEntity(
      await this.workloadService.create(createWorkloadDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: WorkloadEntity, isArray: true })
  async findAll(
    @Query('educationYearId', ParseIntPipe) educationYearId: number,
    @Query('cafedraId', ParseIntPipe) cafedraId: number,
  ) {
    return (await this.workloadService.findAll(educationYearId, cafedraId)).map(
      (workload) => new WorkloadEntity(workload),
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: WorkloadEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new WorkloadEntity(await this.workloadService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: WorkloadEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWorkloadDto: UpdateWorkloadDto,
  ) {
    return new WorkloadEntity(
      await this.workloadService.update(id, updateWorkloadDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: WorkloadEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new WorkloadEntity(await this.workloadService.remove(id));
  }

  @Post('createOrUpdate')
  @ApiCreatedResponse({ type: WorkloadEntity })
  async createOrUpdate(@Body() createWorkloadDto: CreateWorkloadDto) {
    return new WorkloadEntity(
      await this.workloadService.createOrUpdate(createWorkloadDto),
    );
  }
}
