import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { MDLDirective } from './mdl-upgrade-element';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './pages/login/normal/normal-login.component';
import { ForgotPasswordComponent } from './pages/login/forgotpassword/forgot-password.component';
import { NewUserComponent } from './components/newuser/newuser.component';

import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/activators/authguard';
import { firebaseConfig  } from '../assets/config';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    DashboardPage,
    ProfileComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MDLDirective,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [StudentService, AuthService, AngularFireAuth, AuthGuard, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
