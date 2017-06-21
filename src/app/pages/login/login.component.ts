import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { LoginComponent } from './normal/normal-login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginPage implements OnInit {

    forgotPassword: boolean = false;

    constructor() { }

    ngOnInit() { }

    forgotPasswordBtnClicked() {
        this.forgotPassword = !this.forgotPassword;
    }
}
