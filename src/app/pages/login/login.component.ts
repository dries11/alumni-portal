import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './normal/normal-login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginPage implements OnInit {

    forgotPassword: boolean = false;

    constructor(private route: Router) { }

    ngOnInit() { }
}
