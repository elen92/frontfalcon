import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NombreComponenteComponent } from './Components/nombre-componente/nombre-componente.component';
import { ContactregisterComponent } from './Components/contactregister/contactregister.component';
import { ContactRegisterComponent } from './components/contact-register/contact-register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NombreComponenteComponent,
    ContactregisterComponent,
    ContactRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
