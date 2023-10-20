import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnmpModule } from './snmp/snmp.module';

@Module({
  imports: [SnmpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
