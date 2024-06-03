import { Test, TestingModule } from '@nestjs/testing';
import { EducationYearService } from './education-year.service';

describe('EducationYearService', () => {
  let service: EducationYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationYearService],
    }).compile();

    service = module.get<EducationYearService>(EducationYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
