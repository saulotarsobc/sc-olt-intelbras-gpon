import { Controller, Get } from "@nestjs/common";
import { SnmpService } from "./snmp.service";

@Controller("snmp")
export class SnmpController {
  constructor(private readonly snmpService: SnmpService) {}

  @Get("snmpwalk")
  async snmpwalk() {
    return await this.snmpService.snmpwalk();
  }
}
