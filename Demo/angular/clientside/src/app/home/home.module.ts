import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppRoutingModule, LoginModule],
  exports: [HomeComponent],
})
export class HomeModule {}
