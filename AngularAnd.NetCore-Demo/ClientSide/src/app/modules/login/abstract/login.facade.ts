import { LoginService } from '../service/login.service';
import { AppInjector } from 'src/app/service-injector.helper';
import { User } from 'src/app/models/login/User';

export class LoginFacade {
  private loginService: LoginService;
  constructor() {
    this.loginService = AppInjector.get(LoginService);
  }

  async verifyLogin(user: User): Promise<boolean> {
    user = await this.loginService.getUser(user);
    if (user.id) {
      return true;
    }
    return false;
  }
}
