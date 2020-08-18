import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
    step = 1;
    buyCart: { price: number; quantity: number; id: number }[] = [];
    constructor() {}

    ngOnInit(): void {
        console.log('==00=');
        console.log(this.step);
        console.log('=00');
    }

    onBuy(item: { price: number; quantity: number; id: number }): void {
        console.log(' work3');

        this.step = 2;
        this.buyCart = [];
        this.buyCart.push(item);
        console.log('====================================');
        console.log(this.step);
        console.log('====================================');
        setTimeout(() => {
            this.step = 3;
            this.buyCart = [];
            this.buyCart.push(item);
            console.log('====================================');
            console.log(this.step);
            console.log('====================================');
        }, 1000);
    }
}
