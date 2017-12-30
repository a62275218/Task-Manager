import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(private oc: OverlayContainer) {
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
