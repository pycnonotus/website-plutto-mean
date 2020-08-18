import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

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

    onCheckUser(minecraftName: string) {
        let isInSQL = false;
        this.error = [];
        this.http
            .get(
                `https://api.mojang.com/users/profiles/minecraft/${this.minecraftName}`
            )
            .subscribe((response) => {
                console.log(response);
            });

        if (!isInSQL) {
            this.step = 2; // user is mot found
            this.error.push(" can't fint this minecraft Name ");
        }
    }
}
