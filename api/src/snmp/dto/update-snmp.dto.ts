import { PartialType } from '@nestjs/mapped-types';
import { CreateSnmpDto } from './create-snmp.dto';

export class UpdateSnmpDto extends PartialType(CreateSnmpDto) {}
