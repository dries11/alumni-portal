import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseService } from './database.service';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {

    constructor(private afAuth: AngularFireAuth, private databaseService: DatabaseService) {
    }

    login(email: string, password: string): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUpUser(userObj: User, email: string, password: string): boolean {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(error => {
            return false;
        }).then( data => {
            this.addPhotoUrl(data);
            this.databaseService.signUpUser(data);
        });
        return true;
    }

    resetPassword(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<any>  {
        return this.afAuth.auth.signOut();
    }

    getCurrentUserId(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.afAuth.auth.currentUser.uid);
        });
    }

    private addPhotoUrl(user: firebase.User) {
        user.updateProfile({
            displayName: user.displayName,
            photoURL: this.generatePhotoUrl(user.email)
        });
    }

    private generatePhotoUrl(email: string): string {
        let photoUrl = "https://www.gravatar.com/avatar/" + this.generateEmailHash(email) + "?d=retro&r=pg&s=200";
        return photoUrl;
    }

    private generateEmailHash(input: string) {
        return Md5.hashStr(input);
    }
}
