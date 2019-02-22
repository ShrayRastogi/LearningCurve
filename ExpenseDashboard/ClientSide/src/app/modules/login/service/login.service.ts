import { Injectable } from '@angular/core';
import { User } from 'src/app/models/login/User';

@Injectable()
export class LoginService {
  constructor() {}

  getUser(id: number): Promise<User> {
    return new Promise<User>(resolve => {
      resolve({ name: 'Shray Rastogi' });
    });
  }
}
