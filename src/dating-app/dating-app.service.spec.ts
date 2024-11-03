import { Test, TestingModule } from '@nestjs/testing';
import { DatingAppService } from './dating-app.service';

describe('DatingAppService', () => {
  let service: DatingAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatingAppService],
    }).compile();

    service = module.get<DatingAppService>(DatingAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
