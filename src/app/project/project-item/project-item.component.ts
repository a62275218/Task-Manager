import {Component, EventEmitter, Input, OnInit, Output, HostBinding, HostListener} from '@angular/core';
import {cardAnime} from '../../animations/card';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    animations: [
        cardAnime
    ]
})
export class ProjectItemComponent implements OnInit {

    @Input() item;
    @Output() invite = new EventEmitter<void>();
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    @HostBinding('@card') cardState = 'normal';

    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.cardState = 'hover';
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.cardState = 'normal';
    }

    onEditClick() {
        this.edit.emit();
    }

    onInviteClick() {
        this.invite.emit();
    }

    onDelClick() {
        this.delete.emit();
    }
}
