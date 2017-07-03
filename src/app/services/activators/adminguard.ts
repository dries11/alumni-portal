import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, private afDB: AngularFireDatabase) {}

    canActivate(): Observable<boolean> {
        let uid = this.auth.getCurrentUserId();
        const userRef = this.afDB.database.ref('/users/' + uid);
        userRef.
    }

}