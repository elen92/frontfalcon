import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { DestinationsRegisterComponent } from './components/destinations-register/destinations-register.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ContactRegisterComponent } from './components/contact-register/contact-register.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ContactRegisterComponent,
    UserRegisterComponent,
    DestinationsRegisterComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
