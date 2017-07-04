import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/activators/authguard';
import { AdminGuard } from './services/activators/adminguard';
import { LoginPage } from './pages/login/login.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './pages/login/normal/normal-login.component';
import { ForgotPasswordComponent } from './pages/login/forgotpassword/forgot-password.component';
import { NewUserComponent } from './components/newuser/newuser.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPage, children: [
        {path: '', component: LoginComponent},
        {path: 'forgot-password', component: ForgotPasswordComponent}
    ]},
    {path: 'dashboard', component: DashboardPage, canActivate: [AuthGuard], children: [
        {path: 'update-profile', component: ProfileComponent},
        {path: 'sign-up-user', component: NewUserComponent, canActivate: [AdminGuard]}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
