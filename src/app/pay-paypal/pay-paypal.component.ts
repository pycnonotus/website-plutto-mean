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
        price: 7.5,
        description: 'Minecraft pure golden block',
        img: '/assets/img/GoldOreNew.png',
    };

    paidFor = false;

    ngOnInit(): void {
        paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: this.product.description,
                                amount: {
                                    currency_code: 'ILS',
                                    value: this.product.price,
                                },
                            },
                        ],
                        application_context: {
                            shipping_preference: 'NO_SHIPPING',
                        },
                    });
                },
                onApprove: async (data, actions) => {
                    console.log(data);
                    console.log(actions);

                    const order = await actions.order.capture();

                    console.log('====================================');
                    console.log(order);
                    console.log('====================================');
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(this.paymentElement.nativeElement);
    }
}
