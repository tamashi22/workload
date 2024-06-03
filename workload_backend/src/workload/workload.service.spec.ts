import { Test, TestingModule } from '@nestjs/testing';
import { WorkloadService } from './workload.service';

describe('WorkloadService', () => {
  let service: WorkloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkloadService],
    }).compile();

    service = module.get<WorkloadService>(WorkloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
