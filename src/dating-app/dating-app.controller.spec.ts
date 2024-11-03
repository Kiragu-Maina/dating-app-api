import { Test, TestingModule } from '@nestjs/testing';
import { DatingAppController } from './dating-app.controller';
import { DatingAppService } from './dating-app.service';

describe('DatingAppController', () => {
  let controller: DatingAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatingAppController],
      providers: [DatingAppService],
    }).compile();

    controller = module.get<DatingAppController>(DatingAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
