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
import { CafedraService } from './cafedra.service';
import { CreateCafedraDto } from './dto/create-cafedra.dto';
import { UpdateCafedraDto } from './dto/update-cafedra.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CafedraEntity } from './entities/cafedra.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserEntity } from 'src/users/entities/user.entity';
@Controller('cafedra')
@ApiTags('cafedra')
export class CafedraController {
  constructor(private readonly cafedraService: CafedraService) {}

  @Post()
  @ApiCreatedResponse({ type: CafedraEntity })
  async create(@Body() createCafedraDto: CreateCafedraDto) {
    return new CafedraEntity(
      await this.cafedraService.create(createCafedraDto),
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CafedraEntity, isArray: true })
  async findAll() {
    const cafedras = await this.cafedraService.findAll();
    return cafedras.map((cafedra) => new CafedraEntity(cafedra));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CafedraEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new CafedraEntity(await this.cafedraService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CafedraEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCafedraDto: UpdateCafedraDto,
  ) {
    return new CafedraEntity(
      await this.cafedraService.update(id, updateCafedraDto),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CafedraEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new CafedraEntity(await this.cafedraService.remove(id));
  }

  @Get(':id/users')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async getUsers(@Param('id', ParseIntPipe) id: number) {
    const users = await this.cafedraService.getUsers(id);
    return users.map((user) => new UserEntity(user));
  }
}
