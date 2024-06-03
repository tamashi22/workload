import { Module } from '@nestjs/common';
import { WorkloadService } from './workload.service';
import { WorkloadController } from './workload.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WorkloadController],
  providers: [WorkloadService, PrismaService],
})
export class WorkloadModule {}
