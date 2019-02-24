import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/component/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { LoginComponent } from './modules/login/component/login.component';
import { setAppInjector } from './service-injector.helper';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    setAppInjector(this.injector);
  }
}
