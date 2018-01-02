import {Component, Inject, Injector} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(private oc: OverlayContainer) {
        const injector = Injector.create([
            {provide: Person, useClass: Person, deps: [Id, Address]},
            {
                provide: Address,
                useFactory: () => {
                    return new Address('VIC', 'Melbourne', 'East Malvern', '295 Waverley Road');
                },
                deps: []
            }, {
                provide: Id,
                useFactory: () => {
                    return Id.getId('111');
                },
                deps: []
            }
        ]);
        const person = injector.get(Person);
        console.log(person);
    }

    darkTheme = false;

    switchTheme(dark) {
        this.darkTheme = dark;
        if (this.darkTheme = dark) {
            this.oc.getContainerElement().className = 'dark-theme';
        } else {
            this.oc.getContainerElement().className = null;
        }
    }
}

class Id {
    static getId(type: string): Id {
        return new Id();
    }
}

class Address {
    state: string;
    city: string;
    district: string;
    street: string;

    constructor(state, city, district, street) {
        this.state = state;
        this.city = city;
        this.district = district;
        this.street = street
    }
}

class Person {
    id: Id;
    address: Address;

    constructor(id, address) {
        this.id = id;
        this.address = address;
    }
}
