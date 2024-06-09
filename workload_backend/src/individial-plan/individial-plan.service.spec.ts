import { Test, TestingModule } from '@nestjs/testing';
import { IndividialPlanService } from './individial-plan.service';

describe('IndividialPlanService', () => {
  let service: IndividialPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndividialPlanService],
    }).compile();

    service = module.get<IndividialPlanService>(IndividialPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
