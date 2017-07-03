import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'new-user',
    templateUrl: './newuser.component.html',
    styleUrls: ['./newuser.component.css']
})
export class NewUserComponent {

    masks: any;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    company: string;
    role: string;
    admin: any = 0;
    city: string;
    country: string;
    state: string;
    street: string;
    zipcode: string;
    password: string;
    passwordReEntry: string;

    constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }

    signupUser() {
        this.stripPhoneNumber();
        const user = new User(this.admin, this.email, this.firstName, this.lastName, this.phoneNumber,
                                this.city, this.country, this.state, this.street, this.zipcode,
                                this.company, this.role);
        const created: boolean = this.auth.signUpUser(user, this.email, this.password);
        if (created) {
            this.router.navigate(['dashboard']);
        }
    }

    stripPhoneNumber(): void {
        this.phoneNumber = this.phoneNumber.replace(/\D+/g, '');
    }

}
