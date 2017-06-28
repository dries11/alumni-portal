import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './pages/login/normal/normal-login.component';
import { ForgotPasswordComponent } from './pages/login/forgotpassword/forgot-password.component';

import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.service';
import { firebaseConfig  } from '../assets/config';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    ProfileComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [StudentService, AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
