import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { ButtonComponent } from './component/button/button.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
