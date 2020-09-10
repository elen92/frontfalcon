import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { GalleryComponent } from './components/gallery/gallery.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { RegionsComponent } from './components/regions/regions.component';
import { AllDestinationsComponent } from './components/all-destinations/all-destinations.component';
import { DataDestinationsComponent } from './components/data-destinations/data-destinations.component';
import { ShowDestinationsComponent } from './components/show-destinations/show-destinations.component';


const routesAPP: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: UserRegisterComponent },
  { path: 'updateUser', canActivate: [AuthGuard], component: UsersUpdateComponent },
  { path: 'contactUs', component: ContactRegisterComponent },
  { path: 'destination', component: DestinationsRegisterComponent },
  { path: 'regions', component: RegionsComponent},
  {path: 'allDestinations', component: AllDestinationsComponent},
  { path: 'destination', canActivate: [AuthGuard], component: DestinationsRegisterComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'regions', component: RegionsComponent},
  {path: 'destinationOne/:id', component: DataDestinationsComponent},
  { path: 'show-destinations/:destinations', component: ShowDestinationsComponent }
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
    HomeComponent,
    GalleryComponent,
    DestinationsComponent,
    RegionsComponent,
    AllDestinationsComponent,
    DataDestinationsComponent,
    ShowDestinationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesAPP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
