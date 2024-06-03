import { Test, TestingModule } from '@nestjs/testing';
import { CafedraService } from './cafedra.service';

describe('CafedraService', () => {
  let service: CafedraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafedraService],
    }).compile();

    service = module.get<CafedraService>(CafedraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
