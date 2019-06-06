import { Injectable } from '@angular/core';
import { User } from 'src/app/models/login/User';

@Injectable()
export class LoginService {
  constructor() {}
  async getUser(user: User): Promise<User> {
    return new Promise<User>(resolve => {
      const validUser = new User();
      if (user.username.value.toString() === 'shray45') {
        validUser.name = 'Shray Rastogi';
        validUser.id = 1;
        validUser.age = 24;
        validUser.username = user.username;
        validUser.password = user.password;
      }
      resolve(validUser);
    });
  }
}
