import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopItem } from './../../shop-item.model';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
    @Input() level = 0;
    @Output() buying = new EventEmitter<number>();

    @Input() buyCallbacks: (item: {
        price: number;
        quantity: number;
        id: number;
    }) => void;
    price = [0, 3, 8, 12];
    click = 0;
    constructor() {}

    ngOnInit(): void {}

    getTitle(): string {
        switch (this.level) {
            case 0:
                return;
            case 3:
                return 'יהלום';
            case 2:
                return 'ברז';
            case 1:
                return 'ארג';
        }
    }
    getSubList(): string[] {
        switch (this.level) {
            case 0:
                return;
            case 3:
                return [
                    'P2W',
                    'סמים',
                    'סמים',
                    'חשיש',
                    'ירק',
                    'עוגות ',
                    'P2W',
                    'סמים',
                    'סמים',
                    'חשיש',
                    'ירק',
                    'עוגות ',
                    'P2W',
                ];
            case 2:
                return ['P2W', 'סמים', 'סמים', 'חשיש', 'ירק', 'עוגות ', 'P2W'];
            case 1:
                return [
                    '5%	בונוס קריסטלים',
                    'כותרת וי-אי-פי רמה 1',
                    'קופסאות מזל וי-אי-פי 1',
                ];
        }
    }

    getStleeClass(): string {
        let ret = ' ';
        if (this.level === 1) {
            ret += 'fabric-gray';
        }
        if (this.level === 3) {
            ret += 'fabric-blue';
        }
        if (this.level === 2) {
            ret += 'fabric-pink';
        }
        return ret;
    }

    buy(): void {
        this.buying.emit(this.level);
    }
}
