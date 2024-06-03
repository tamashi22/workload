import { Test, TestingModule } from '@nestjs/testing';
import { RupController } from './rup.controller';
import { RupService } from './rup.service';

describe('RupController', () => {
  let controller: RupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RupController],
      providers: [RupService],
    }).compile();

    controller = module.get<RupController>(RupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
