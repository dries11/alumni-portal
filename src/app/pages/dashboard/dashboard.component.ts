import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardPage implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() { }

    logoutBtnClicked() {
        this.auth.logoutUser();
        this.router.navigate(['']);
    }
}
