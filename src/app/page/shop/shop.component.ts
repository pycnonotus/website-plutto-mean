import { HttpClient } from '@angular/common/http';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCheckDialogComponent } from './../../shared/user-check-dialog/user-check-dialog.component';
const ipAddres = '85.65.61.221:3000'; //localhost:3000

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
    step = 1;
    itemId = 0;
    errorArray: string[] = [];
    minecraftName = '';
    buyCart: { price: number; quantity: number; id: number }[] = [];
    constructor(private http: HttpClient, public dialog: MatDialog) {}

    ngOnInit(): void {}

    onBuy(itemId: number): void {
        this.step = 2;
        this.buyCart = [];
        this.itemId = itemId;
    }
    openDialogCheeck() {
        const dialogRef = this.dialog.open(UserCheckDialogComponent, {
            width: '400x',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }

    onCheckUser() {
        if (this.minecraftName.trim() === '') {
            this.errorArray = ['תכניס שם'];
            return;
        }
        let isInSQL = false;
        this.errorArray = [];
        this.http
            .get(`http://` + ipAddres + `/api/pay/${this.minecraftName}`)
            .subscribe(
                (response) => {
                    this.step = 3;
                },
                (err) => {
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
    ngOnDestroy() {
        //TODO: add some logic here?
    }
}
