import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private userId: any;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.afAuth.authState.subscribe((auth) => {
      if (auth === null) {
        this.isLoggedIn = false;
        this.userId = null;
      } else {
        this.isLoggedIn = true;
        this.userId = auth.uid;
        console.log('logged in');
        this.router.navigate(['dashboard']);
      }
    });
  }
}
