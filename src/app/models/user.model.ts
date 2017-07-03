export class User {
    private address: Address;
    private admin: number;
    private currentJob: CurrentJob;
    private email: string;
    private firstName: string;
    private lastName: string;
    private phoneNumber: string;

    constructor(admin: number, email: string, firstName: string, lastName: string, phoneNumber: string,
                city: string, country: string, state: string, street: string, zipcode: string,
                company: string, role: string)
                {
                    this.address = new Address(city, country, state, street, zipcode);
                    this.admin = admin;
                    this.currentJob = new CurrentJob(company, role);
                    this.email = email;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.phoneNumber = phoneNumber;
                }
}

class Address {
    private city: string;
    private country: string;
    private state: string;
    private street: string;
    private zipcode: string;

    constructor(city: string, country: string, state: string, street: string, zipcode: string) {
        this.city = city;
        this.country = country;
        this.state = state;
        this.street = street;
        this.zipcode = zipcode;
    }
}

class CurrentJob {
    private company: string;
    private role: string;

    constructor(company: string, role: string) {
        this.company = company;
        this.role = role;
    }
}
