import { Module } from '@nestjs/common';
import { RupService } from './rup.service';
import { RupController } from './rup.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [RupController],
  providers: [RupService],
  imports: [PrismaModule],
})
export class RupModule {}
