import { Test, TestingModule } from '@nestjs/testing';
import { AnnoucementService } from './annoucement.service';

describe('AnnoucementService', () => {
  let service: AnnoucementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnoucementService],
    }).compile();

    service = module.get<AnnoucementService>(AnnoucementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
