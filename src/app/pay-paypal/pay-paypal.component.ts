import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
    selector: 'app-pay-paypal',
    templateUrl: './pay-paypal.component.html',
    styleUrls: ['./pay-paypal.component.css'],
})
export class PayPaypalComponent implements OnInit {
    @ViewChild('paypal', { static: true }) paymentElement: ElementRef;
    constructor() {}

    product = {
        price: 777,
        description: "Minecraft pure golden block";
        img: '/src/assets/img/GoldOreNew.png'
    }

    ngOnInit(): void {

    }
}
