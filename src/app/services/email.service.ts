import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { emailAPIKey } from '../../assets/config';

export class EmailValidatorService {

    serverUrl: string = 'https://apilayer.net/api/check?access_key';

    constructor(private http: Http) {}

    checkEmail(control: FormControl): Promise<any> {
        return new Promise(resolve => {
            this.http.get(this.serverUrl + emailAPIKey + '&email=' + control.value)
            .map(res => res.json())
            .subscribe(data => {
                resolve(data.format_valid);
            });
        });
    }
}
