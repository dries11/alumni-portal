import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NewUserComponent } from '../../components/newuser/newuser.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardPage implements OnInit {

    private isAdmin;
    private uid: string;
    private sub: any;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
        this.uid = this.auth.getCurrentUserId();
    }

    logoutBtnClicked() {
        this.auth.logoutUser().then(() => {
            this.router.navigate(['']);
        });
    }
}
