import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DestinationsRegisterComponent } from './components/destinations-register/destinations-register.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserRegisterComponent,
    DestinationsRegisterComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
