import { Test, TestingModule } from '@nestjs/testing';
import { RupService } from './rup.service';

describe('RupService', () => {
  let service: RupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RupService],
    }).compile();

    service = module.get<RupService>(RupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
