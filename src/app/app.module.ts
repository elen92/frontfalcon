import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { DestinationsRegisterComponent } from './components/destinations-register/destinations-register.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ContactRegisterComponent } from './components/contact-register/contact-register.component';

import { AuthGuard } from './guardians/auth.guard';

import { ExperiencesComponent } from './components/experiences/experiences.component';

import { FooterComponent } from './components/footer/footer.component';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';


const routesAPP: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: UserRegisterComponent },
  { path: 'updateUser', canActivate: [AuthGuard], component: UsersUpdateComponent },
  { path: 'contactUs', component: ContactRegisterComponent },
  { path: 'destination', canActivate: [AuthGuard], component: DestinationsRegisterComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ContactRegisterComponent,
    UserRegisterComponent,
    DestinationsRegisterComponent,
    UsersUpdateComponent,

    ExperiencesComponent,
    FooterComponent,
    BannerPrincipalComponent,
    MainMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesAPP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
