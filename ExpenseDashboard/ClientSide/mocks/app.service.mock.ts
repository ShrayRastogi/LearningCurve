import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppServiceMock {
  constructor() {}

  sayHello(): Observable<string> {
    return new Observable();
  }
}
