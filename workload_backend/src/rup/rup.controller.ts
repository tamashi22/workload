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
  Query,
} from '@nestjs/common';
import { RupService } from './rup.service';
import { CreateRupDto } from './dto/create-rup.dto';
import { UpdateRupDto } from './dto/update-rup.dto';
import { CreateManyRupDto } from './dto/create-many-rup.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RupEntity } from './entities/rup.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('rup')
@ApiTags('rup')
export class RupController {
  constructor(private readonly rupService: RupService) {}

  @Post()
  @ApiCreatedResponse({ type: RupEntity })
  async create(@Body() createRupDto: CreateRupDto) {
    return new RupEntity(await this.rupService.create(createRupDto));
  }

  @Post('many')
  @ApiCreatedResponse({ description: 'Number of RUPs created', type: Number })
  async createMany(@Body() createManyRupDto: CreateManyRupDto) {
    const result = await this.rupService.createMany(createManyRupDto);
    return { count: result.count };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RupEntity, isArray: true })
  async findAll(
    @Query('educationYearId', ParseIntPipe) educationYearId: number,
    @Query('cafedraId', ParseIntPipe) cafedraId: number,
  ) {
    try {
      console.log('Received educationYearId:', educationYearId);
      const rups = await this.rupService.findAllByYear(
        educationYearId,
        cafedraId,
      );
      return rups.map((rup) => new RupEntity(rup));
    } catch (error) {
      console.error('Error in findAll:', error);
      throw new Error('Could not fetch RUPs');
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RupEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new RupEntity(await this.rupService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: RupEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRupDto: UpdateRupDto,
  ) {
    return new RupEntity(await this.rupService.update(id, updateRupDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RupEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new RupEntity(await this.rupService.remove(id));
  }

  @Post('upsert')
  @ApiCreatedResponse({ type: RupEntity })
  async upsert(@Body() createRupDto: CreateRupDto) {
    return new RupEntity(await this.rupService.upsert(createRupDto));
  }
}
