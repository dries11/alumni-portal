import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Http } from '@angular/http';
import { emailAPIKey } from '../../../../assets/config';

@Component({
    selector: 'app-normal-login',
    templateUrl: 'normal-login.component.html',
    styleUrls: ['./normal-login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    invalid: boolean = false;

    submitAttempt: boolean = false;

    constructor(private route: Router, private formBuilder: FormBuilder, private http: Http, private auth: AuthService) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required, this.checkEmail.bind(this)],
            password: ['', Validators.required]
        });
    }

    checkEmail(email: FormControl): Promise<any> {
        const serverUrl = 'https://apilayer.net/api/check?access_key';
        return new Promise(resolve => {
            this.http.get(serverUrl + emailAPIKey + '&email=' + email.value)
            .map(res => res.json())
            .subscribe(data => {
                if (data.format_valid === false) {
                    resolve({'email invalid': true});
                } else {
                    resolve(false);
                }
            });
        });
    }

    ngOnInit() {

    }

    forgotPasswordBtnClicked() {
        this.route.navigate(['login/forgot-password']);
    }

    loginClicked() {
        if (this.loginForm.valid) {
            this.invalid = false;
            this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .then(data => {
                console.log(data);
            });

        } else {
            this.invalid = true;
        }
    }
}
