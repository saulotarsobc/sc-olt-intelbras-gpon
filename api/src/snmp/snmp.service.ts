import { spawn } from "child_process";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SnmpService {
  async snmpwalk() {
    return new Promise((resolve, errouuu) => {
      const res = spawn("snmpwalk");

      res.stdout.on("data", (data) => {
        resolve(data.toString());
      });
      res.stderr.on("data", (data) => {
        errouuu(data.toString());
      });
      res.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
      });
    });
  }
}
