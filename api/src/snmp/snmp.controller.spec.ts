import { Test, TestingModule } from '@nestjs/testing';
import { SnmpController } from './snmp.controller';
import { SnmpService } from './snmp.service';

describe('SnmpController', () => {
  let controller: SnmpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnmpController],
      providers: [SnmpService],
    }).compile();

    controller = module.get<SnmpController>(SnmpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
