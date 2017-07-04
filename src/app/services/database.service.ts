import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';

@Injectable()
export class DatabaseService {

    constructor(private afDB: AngularFireDatabase) {}

    signUpUser(newUser: firebase.User) {
        const userRef = this.afDB.database.ref('/users/' + newUser.uid);
        userRef.set(newUser);
    }

    getUserInfo(uid: string): Promise<any> {
        return new Promise(resolve => {
            const ref = this.afDB.database.ref('/users/' + uid);
            ref.on('value', (snapshot) => {
                resolve(snapshot.val());
            }, function(error) {
                resolve('Error reading user data: ' + error.code);
            })
        });
    }

}