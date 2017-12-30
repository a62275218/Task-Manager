import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSidenavModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSidenavModule
    ],
    declarations: [ConfirmDialogComponent],
    entryComponents: [
        ConfirmDialogComponent
    ]
})
export class SharedModule {
}