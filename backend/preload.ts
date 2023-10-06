/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IpcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      IpcRenderer: IpcRenderer
    }
  }
};

const api = {

};

process.once("loaded", () => {
  (global as any).api = api;
});
