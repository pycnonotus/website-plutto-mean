import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const ipAddres = '85.65.61.221:3000'; //localhost:3000
@Component({
    selector: 'app-user-check-dialog',
    templateUrl: './user-check-dialog.component.html',
    styleUrls: ['./user-check-dialog.component.css'],
})
export class UserCheckDialogComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private http: HttpClient
    ) {}
    minecraftName = '';
    errorArray: string[] = [];
    ngOnInit(): void {}
    onCheckUser() {
        if (this.minecraftName.trim() === '') {
            this.errorArray = ['תכניס שם'];
            return;
        }
        console.log(' hellor there');
        let isInSQL = false;
        this.errorArray = [];
        console.log(' hellor there 33');
        this.http
            .get(`http://` + ipAddres + `/api/pay/${this.minecraftName}`)
            .subscribe(
                (response) => {
                    console.log(' hellor there 44');
                },
                (err) => {
                    console.log(' errr');
                    if (err.status === 401) {
                        this.errorArray.push('עליך להתחבר לפחות פעם אחת לשרת');
                    } else if (err.status === 404) {
                        this.errorArray.push('אין שחקן כזה');
                    } else if (err.status === 400) {
                        this.errorArray.push('שם לא תקין');
                    } else {
                        this.errorArray.push('אין גישה לשרת');
                    }
                }
            );
    }
}
