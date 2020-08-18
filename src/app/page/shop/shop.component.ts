import { HttpClient } from '@angular/common/http';

import { Component, OnInit, OnDestroy } from '@angular/core';
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
    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    onBuy(itemId: number): void {
        this.step = 2;
        this.buyCart = [];
        this.itemId = itemId;
    }

    onCheckUser() {
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
                        this.errorArray.push('עליך להתחבר פעם אחת למשחק לפחות');
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
