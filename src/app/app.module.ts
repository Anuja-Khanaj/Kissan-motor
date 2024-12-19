import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { AddcarComponent } from './component/authenticated/addcar/addcar.component';
import { HomeComponent } from './component/authenticated/home/home.component';
import { ShowcarComponent } from './component/authenticated/showcar/showcar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/authenticated/home/navbar/navbar.component';
import { SerachComponent } from './component/authenticated/home/serach/serach.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AddcarComponent,
    HomeComponent,
    ShowcarComponent,
    NavbarComponent,
    SerachComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
