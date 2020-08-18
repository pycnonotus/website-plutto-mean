import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
const ipAddres = '85.65.61.221:3000'; //localhost:3000

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
    step = 1;
    itemId = 0;
    error: string[] = [];
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
        this.error = [];
        this.http
            .get(`http://` + ipAddres + `/api/pay/${this.minecraftName}`)
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (err) => {
                    console.log(err);
                }
            );
    }
}
