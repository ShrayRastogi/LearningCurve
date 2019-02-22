import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home.component';
import { LoginModule } from '../login/login.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [LoginModule, MatToolbarModule]
})
export class HomeModule {}
