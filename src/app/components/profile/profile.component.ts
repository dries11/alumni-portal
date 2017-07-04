import { Component, OnInit, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-dashboard-profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

    user: any;
    uid: any;
    sub: any;

    constructor(private auth: AuthService, private databaseService: DatabaseService) {
    }

    ngOnInit() {
        this.auth.getCurrentUserId().then(data => {
            this.uid = data;
        }).then(() => {
            this.databaseService.getUserInfo(this.uid).then(data => {
                this.user = data;
                console.log(this.user);
            });
        });
    }
}
