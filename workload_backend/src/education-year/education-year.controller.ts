import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { EducationYearService } from './education-year.service';
import { CreateEducationYearDto } from './dto/create-education-year.dto';
import { UpdateEducationYearDto } from './dto/update-education-year.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EducationYearEntity } from './entities/education-year.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('education-year')
@ApiTags('education-year')
export class EducationYearController {
  constructor(private readonly educationYearService: EducationYearService) {}

  @Post()
  @ApiCreatedResponse({ type: EducationYearEntity })
  async create(@Body() createEducationYearDto: CreateEducationYearDto) {
    return new EducationYearEntity(
      await this.educationYearService.create(createEducationYearDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: EducationYearEntity, isArray: true })
  async findAll() {
    const educationYears = await this.educationYearService.findAll();
    return educationYears.map(
      (educationYear) => new EducationYearEntity(educationYear),
    );
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EducationYearEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new EducationYearEntity(await this.educationYearService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: EducationYearEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEducationYearDto: UpdateEducationYearDto,
  ) {
    return new EducationYearEntity(
      await this.educationYearService.update(id, updateEducationYearDto),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EducationYearEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new EducationYearEntity(await this.educationYearService.remove(id));
  }
}
