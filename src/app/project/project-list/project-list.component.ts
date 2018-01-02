import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../animations/router';
import {listAnime} from '../../animations/list';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    animations: [
        slideToRight, listAnime
    ]
})
export class ProjectListComponent implements OnInit {

    @HostBinding('@routerAnime') state;

    projects = [
        {
            id: 1,
            name: '123',
            desc: '1234',
            coverImg: 'assets/img/covers/0.jpg'
        },
        {
            id: 2,
            name: '321',
            desc: '12324',
            coverImg: 'assets/img/covers/1.jpg'
        }
    ];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openNewProjectDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {
            data: {
                title: 'New Project'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.projects = [...this.projects, {
                id: 3,
                name: 'a new project',
                desc: 'this is a new project',
                coverImg: 'assets/img/covers/0.jpg'
            }, {
                id: 4,
                name: 'a new project',
                desc: 'this is a new project',
                coverImg: 'assets/img/covers/0.jpg'
            }];
        });
    }

    openInviteDialog() {
        const dialogRef = this.dialog.open(InviteComponent);
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {
            data: {
                title: 'Edit Project'
            }
        });
    }

    openConfirmDialog(project) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Delete Project',
                content: 'Are you sure you want to delete?'
            }
        });

        dialogRef.afterClosed().subscribe(() => {
            this.projects = this.projects.filter(p => p.id !== project.id);
        });
    }
}
