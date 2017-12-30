import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AppRoutingModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule,
                ir: MatIconRegistry, ds: DomSanitizer) {
        if (parent) {
            throw new Error('Module already exist. Cannot load again!');
        }
        loadSvgResources(ir, ds);
    }
}
