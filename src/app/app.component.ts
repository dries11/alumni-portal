import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdmin: boolean;
  currentUid: string;

  constructor(private afDB: AngularFireDatabase) {
  }

  checkRole() {
    this.afDB.database.ref().child('users').equalTo(this.currentUid).once("value", function(snapshot) {
      const data = snapshot.val();
      console.log(data);
      if (data === 1) {
        this.isAdmin = true;
        console.log('is admin!');
      } else {
        this.isAdmin = false;
        console.log('not admin');
      }
    });
  }

}
