import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student.model';
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
        this.studentService.getMockStudent().then(data => {
            this.profile = data;
        }).then(() => {
            this.generateEmailHash(this.profile.email);
        });
    }

    private generateEmailHash(input: string) {
        this.profileHash = Md5.hashStr(input);
    }
}
