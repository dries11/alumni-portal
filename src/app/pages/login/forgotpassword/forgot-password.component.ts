import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var componentHandler;

@Component({
    selector: 'app-forgot-password',
    templateUrl: 'forgot-password.component.html'
})

export class ForgotPasswordComponent implements OnInit, AfterViewInit {

    constructor(private router: Router) { }

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }

    ngOnInit() { }

    backToLoginBtnClicked() {
        this.router.navigate(['login']);
    }
}