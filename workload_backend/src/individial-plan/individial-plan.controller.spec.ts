import { Test, TestingModule } from '@nestjs/testing';
import { IndividialPlanController } from './individial-plan.controller';
import { IndividialPlanService } from './individial-plan.service';

describe('IndividialPlanController', () => {
  let controller: IndividialPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndividialPlanController],
      providers: [IndividialPlanService],
    }).compile();

    controller = module.get<IndividialPlanController>(IndividialPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
