import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-task-header',
    templateUrl: './task-header.component.html',
    styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

    @Input() header = '';
    @Output() newTask = new EventEmitter();
    @Output() moveTask = new EventEmitter();
    @Output() delList = new EventEmitter();
    @Output() editList = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    newTaskClick() {
        this.newTask.emit();
    }

    moveListClick() {
        this.moveTask.emit();
    }

    onDelListClick() {
        this.delList.emit();
    }

    onEditListClick() {
        this.editList.emit();
    }
}
