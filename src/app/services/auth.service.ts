import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    private isLoggedIn: boolean;

    constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, private router: Router) {
    }

    login(email: string, password: string): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUpUser(userObj: User, email: string, password: string): boolean {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(error => {
            return false;
        }).then( data => {
            const userRef = this.afDB.database.ref('/users/' + data.uid);
            userRef.set(userObj);
        });
        return true;
    }

    resetPassword(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<any>  {
        return this.afAuth.auth.signOut();
    }

    getCurrentUserId(): string {
        return this.afAuth.auth.currentUser.uid;
    }
}
