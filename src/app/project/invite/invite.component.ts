import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

    items = [
        {
            id: 1,
            name: 'Jake'
        },
        {
            id: 2,
            name: 'John'
        },
        {
            id: 3,
            name: 'Molly'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    displayUser(user: {id: string; name: string}) {
        return user ? user.name : '';
    }

}
