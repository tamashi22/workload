import { Test, TestingModule } from '@nestjs/testing';
import { CafedraController } from './cafedra.controller';
import { CafedraService } from './cafedra.service';

describe('CafedraController', () => {
  let controller: CafedraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CafedraController],
      providers: [CafedraService],
    }).compile();

    controller = module.get<CafedraController>(CafedraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
