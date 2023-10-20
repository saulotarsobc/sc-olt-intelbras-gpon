import { Test, TestingModule } from '@nestjs/testing';
import { SnmpService } from './snmp.service';

describe('SnmpService', () => {
  let service: SnmpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnmpService],
    }).compile();

    service = module.get<SnmpService>(SnmpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
