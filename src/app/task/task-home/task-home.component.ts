import {Component, OnInit, HostBinding} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../animations/router';

@Component({
    selector: 'app-task-home',
    templateUrl: './task-home.component.html',
    styleUrls: ['./task-home.component.scss'],
    animations: [
        slideToRight
    ]
})
export class TaskHomeComponent implements OnInit {

    @HostBinding('@routerAnime') state;

    lists = [
        {
            id: 1,
            name: 'pending',
            desc: 'task1',
            tasks: [
                {
                    id: 1,
                    name: 'task1',
                    desc: 'Buy a cup of coffee',
                    completed: false,
                    priority: 3,
                    owner: {
                        id: 1,
                        name: 'John',
                        avatar: 'avatars:svg-1'
                    },
                    dueDate: new Date(),
                    reminder: new Date()
                },
                {
                    id: 2,
                    name: 'task2',
                    desc: 'Buy a cup of coffee',
                    completed: true,
                    priority: 2,
                    owner: {
                        id: 1,
                        name: 'Jake'
                    },
                    dueDate: new Date()
                }
            ]
        },
        {
            id: 2,
            name: 'done',
            tasks: [
                {
                    id: 1,
                    name: 'task1',
                    desc: 'Buy a cup of tea',
                    completed: false,
                    priority: 1,
                    owner: {
                        id: 1,
                        name: 'John'
                    },
                    dueDate: new Date()
                },
                {
                    id: 2,
                    name: 'task2',
                    desc: 'Buy a cup of coffee',
                    completed: true,
                    priority: 3,
                    owner: {
                        id: 1,
                        name: 'Jake'
                    },
                    dueDate: new Date()
                }
            ]
        }
    ];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    launchNewTaskDialog() {
        const dialogRef = this.dialog.open(NewTaskComponent, {
            data: {
                title: 'New Task'
            }
        });
    }

    launchCopyTaskDialog() {
        const dialogRef = this.dialog.open(CopyTaskComponent, {
            data: {
                lists: this.lists
            }
        });
    }

    launchUpdateTaskDialog(task) {
        const dialogRef = this.dialog.open(NewTaskComponent, {
            data: {
                title: 'Update Task',
                task: task
            }
        });
    }

    launchConfirmDialog() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Delete Task List',
                content: 'Are you sure you want to delete?'
            }
        });

        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchEditListDialog() {
        const dialogRef = this.dialog.open(NewTaskListComponent, {
            data: {
                title: 'Rename Task List'
            }
        });

        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchNewListDialog() {
        const dialogRef = this.dialog.open(NewTaskListComponent, {
            data: {
                title: 'New Task List'
            }
        });

        dialogRef.afterClosed().subscribe(result => console.log(result));
    }
}
