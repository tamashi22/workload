import { Module } from '@nestjs/common';
import { CafedraService } from './cafedra.service';
import { CafedraController } from './cafedra.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CafedraController],
  providers: [CafedraService],
  exports: [CafedraService],
})
export class CafedraModule {}
