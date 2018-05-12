import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  writeLog(message: string) {
    console.log(message);
  }
}
