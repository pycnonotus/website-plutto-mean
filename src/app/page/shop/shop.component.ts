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
    minecraftUuid: string;
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
            if (result.verified) {
                this.step = 3;
            } else {
                this.step = 1;
                this.itemId = 0;
            }
        });
    }

    
    ngOnDestroy() {
        //TODO: add some logic here?
    }
}
