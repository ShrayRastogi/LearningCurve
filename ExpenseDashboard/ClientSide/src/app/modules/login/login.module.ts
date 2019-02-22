import { LoginComponent } from './component/login.component';
import { NgModule } from '@angular/core';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [],
  providers: [LoginService]
})
export class LoginModule {}
