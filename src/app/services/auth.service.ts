import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    login(email: string, password: string): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUpUser(email: string, password: string): boolean {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(error => {
            return false;
        });
        return true;
    }

    resetPassword(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<any>  {
        return this.afAuth.auth.signOut();
    }

    canActivate(): boolean {
        const isAuth = this.isAuthenticated();
        if(!isAuth){
            this.router.navigate(['login']);
            console.log("Login Page Set");
        }
        this.user.map(user => { console.log(user.uid)});
        return isAuth;
    }

    isAuthenticated(): boolean{
        var uid;
        this.user.map(user => { uid = user.uid});
        if (uid != null){
            return true;
        }else {
            return false;
        }
    }

}