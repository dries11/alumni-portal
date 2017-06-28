import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
declare var componentHandler;

@Component({
    selector: 'app-normal-login',
    templateUrl: 'normal-login.component.html',
    styleUrls: ['./normal-login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {

    loginForm: FormGroup;

    submitAttempt: boolean = false;

    constructor(private route: Router, private formBuilder: FormBuilder) { }

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }

    ngOnInit() {

    }

    forgotPasswordBtnClicked() {
        this.route.navigate(['login/forgot-password']);
    }

    loginClicked() {}
}
