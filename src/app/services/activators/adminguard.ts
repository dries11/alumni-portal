import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseService } from '../database.service';

@Injectable()
export class AdminGuard implements CanActivate {

    uid: any;

    constructor(private authService: AuthService, private auth: AngularFireAuth, private databaseService: DatabaseService, private router: Router) {
    }

    canActivate(): Observable<boolean> {
        return this.auth.authState
        .take(1)
        .map((authState) => !!authState)
        .do(authenticated => {
            if (!authenticated) {
                this.router.navigate(['login']);
            } else {
                this.databaseService.getUserInfo(this.auth.auth.currentUser.uid).then(data => {
                    console.log(data.admin);
                    if(!data.admin) {
                        this.router.navigate(['dashboard']);
                    }
                })
            }
        });
    }

}