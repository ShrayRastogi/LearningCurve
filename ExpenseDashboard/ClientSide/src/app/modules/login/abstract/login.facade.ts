import { LoginService } from '../service/login.service';

export class LoginFacade {
  constructor(private loginService: LoginService) {}
}
