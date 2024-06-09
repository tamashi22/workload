import { Module } from '@nestjs/common';
import { AnnoucementService } from './annoucement.service';
import { AnnoucementController } from './annoucement.controller';

@Module({
  controllers: [AnnoucementController],
  providers: [AnnoucementService],
})
export class AnnoucementModule {}
