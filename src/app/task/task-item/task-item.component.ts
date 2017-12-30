import {Component, EventEmitter, Input, OnInit, Output, HostListener} from '@angular/core';
import {itemAnime} from '../../animations/item';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss'],
    animations: [
        itemAnime
    ]
})
export class TaskItemComponent implements OnInit {

    @Input() item;
    @Input() avatar;
    @Output() itemClick = new EventEmitter();
    borderWidth = 'normal';

    @HostListener('mouseenter')
    onMouseEnter() {
        this.borderWidth = 'hover';
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.borderWidth = 'normal';
    }

    constructor() {
    }

    ngOnInit() {
        this.avatar = this.item.owner.avatar ? this.item.owner.avatar : 'unassigned';
    }

    onItemClick() {
        this.itemClick.emit();
    }

    onCheckBoxClick(ev: Event) {
        ev.stopPropagation();
    }

}
