import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home.component';
import { LoginModule } from '../login/login.module';
import { MatToolbarModule, MatDialogModule } from '@angular/material';
import { LoginComponent } from '../login/component/login.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [LoginModule, MatToolbarModule, MatDialogModule],
  entryComponents: [LoginComponent]
})
export class HomeModule {}
