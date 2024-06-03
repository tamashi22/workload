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
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { CreateManyGroupDto } from './dto/create-many-group.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GroupEntity } from './entities/group.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('group')
@ApiTags('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiCreatedResponse({ type: GroupEntity })
  async create(@Body() createGroupDto: CreateGroupDto) {
    return new GroupEntity(await this.groupService.create(createGroupDto));
  }

  @Post('many')
  @ApiCreatedResponse({ description: 'Number of groups created', type: Number })
  async createMany(@Body() createManyGroupDto: CreateManyGroupDto) {
    const result = await this.groupService.createMany(createManyGroupDto);
    return { count: result.count };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: GroupEntity, isArray: true })
  async findAll(
    @Query('educationYearId', ParseIntPipe) educationYearId: number,
  ) {
    const groups = await this.groupService.findAllByYear(educationYearId);
    return groups.map((group) => new GroupEntity(group));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: GroupEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new GroupEntity(await this.groupService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GroupEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return new GroupEntity(await this.groupService.update(id, updateGroupDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: GroupEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new GroupEntity(await this.groupService.remove(id));
  }

  @Delete('byYear/:educationYearId')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Number of groups deleted', type: Number })
  async deleteByYear(
    @Param('educationYearId', ParseIntPipe) educationYearId: number,
  ) {
    return this.groupService.deleteByYear(educationYearId);
  }
}
