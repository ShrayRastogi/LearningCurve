import { Component } from '@angular/core';
import { LoginFacade } from '../abstract/login.facade';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent {
  name = 'My First Angular App!';
  private loginFacade: LoginFacade;
  constructor(private loginService: LoginService) {
    this.loginFacade = new LoginFacade(this.loginService);
  }
  async changeName(): Promise<void> {
    this.name = await this.loginFacade.changeName();
  }
}
