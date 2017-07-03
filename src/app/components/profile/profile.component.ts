import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-dashboard-profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

    @Input('profile') profile: any;
    profileId: number;
    profileHash: any;
    sub: any;

    constructor(private route: ActivatedRoute, private studentService: StudentService) {
        this.sub = this.route.params.subscribe(params => {
            this.profileId = params['id'];
        });
    }

    ngOnInit() {
    }

    private generateEmailHash(input: string) {
        this.profileHash = Md5.hashStr(input);
    }
}
