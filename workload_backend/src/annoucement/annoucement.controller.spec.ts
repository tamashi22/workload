import { Test, TestingModule } from '@nestjs/testing';
import { AnnoucementController } from './annoucement.controller';
import { AnnoucementService } from './annoucement.service';

describe('AnnoucementController', () => {
  let controller: AnnoucementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnoucementController],
      providers: [AnnoucementService],
    }).compile();

    controller = module.get<AnnoucementController>(AnnoucementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
