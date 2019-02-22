import { LoginService } from '../service/login.service';

export class LoginFacade {
  constructor(private loginService: LoginService) {}
  async changeName(): Promise<string> {
    const user = await this.loginService.getUser(2);
    return user.name;
  }
}
