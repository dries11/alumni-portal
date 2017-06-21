import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

    serverUrl: string;

    constructor(private http: Http){
        this.serverUrl = '../../assets/mock-data';
    }

    getStudentById(id: number): Promise<any> {
        return new Promise(resolve => {
            this.http.get(this.serverUrl + '/student.json')
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            });
        });
    }

    getAllStudents(): Promise<any> {
        return new Promise(resolve => {
            this.http.get(this.serverUrl + '/student-list.json').map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }

    getMockStudent(): Promise<any> {
        return new Promise(resolve => {
            this.http.get(this.serverUrl + '/student.json').map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
}
