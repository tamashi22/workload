import { Test, TestingModule } from '@nestjs/testing';
import { WorkloadController } from './workload.controller';
import { WorkloadService } from './workload.service';

describe('WorkloadController', () => {
  let controller: WorkloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkloadController],
      providers: [WorkloadService],
    }).compile();

    controller = module.get<WorkloadController>(WorkloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
