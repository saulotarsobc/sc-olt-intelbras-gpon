/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IpcRenderer, ipcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      IpcRenderer: IpcRenderer
      api: any
    }
  }
};

const api = {
  snmpGet: (oid: string) => ipcRenderer.sendSync("snmpGet", oid)
};

process.once("loaded", () => {
  (global as any).api = api;
});
