import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
    admin: string;
    city: string;
    country: string;
    state: string;
    street: string;
    zipcode: string;
    password: string;
    passwordReEntry: string;

    constructor(private formBuilder: FormBuilder, private auth: AuthService) {
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }

    signupUser() {
    }

}
