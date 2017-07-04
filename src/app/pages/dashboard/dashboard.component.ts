import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NewUserComponent } from '../../components/newuser/newuser.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardPage implements OnInit {

    private isAdmin;
    private uid: any;
    private user: any;

    constructor(private auth: AuthService, private router: Router, private databaseService: DatabaseService) { }

    ngOnInit() {
        this.auth.getCurrentUserId().then(data => {
            this.uid = data;
        }).then(() => {
            this.databaseService.getUserInfo(this.uid).then(data => {
                this.user = data;
            }).then(() => {
                this.isAdmin = this.user.admin;
            })
        });
    }

    toProfilePage() {
        this.router.navigate(['/dashboard/update-profile']);
    }

    logoutBtnClicked() {
        this.auth.logoutUser().then(() => {
            this.router.navigate(['']);
        });
    }
}
