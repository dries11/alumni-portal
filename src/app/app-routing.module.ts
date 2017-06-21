import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginPage } from './pages/login/login.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPage },
    {path: 'dashboard', component: DashboardPage, canActivate: [AuthService], children: [
        {path: 'update-profile/:id', component: ProfileComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
