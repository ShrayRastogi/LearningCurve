import { Component, OnInit, Inject } from '@angular/core';
import { LoginFacade } from '../abstract/login.facade';
import { LoginService } from '../service/login.service';
import { User } from 'src/app/models/login/User';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { passwordValidator } from 'src/app/customValidators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent {
  private loginFacade: LoginFacade;
  user: User = new User();
  private isValidUser = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loginFacade = new LoginFacade();
    this.user.username = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);

    this.user.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator
    ]);
  }

  getInvalidUsernameMessage() {
    return this.user.username.hasError('required')
      ? 'Please enter your username'
      : this.user.username.hasError('minlength')
      ? 'Username should contain at least 6 characters'
      : '';
  }

  getInvalidPasswordMessage() {
    return this.user.password.hasError('required')
      ? 'Please enter your password'
      : this.user.password.hasError('minlength')
      ? 'Password should contain at least 8 characters'
      : this.user.password.hasError('requiredCharacters')
      ? 'Password must contain at least 1 special character'
      : '';
  }

  async userLogin() {
    this.isValidUser = await this.loginFacade.verifyLogin(this.user);
  }
}
