import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slied-item',
    templateUrl: './slied-item.component.html',
    styleUrls: ['./slied-item.component.css'],
})
export class SliedItemComponent implements OnInit {
    @Input() imgSrc =
        'https://akamai-webcdn.blackdesertonline.com/bdo/resources/news/a74f1728247076be009f6dffb61d7e7f.jpg';
    @Input() isActive = false;
    @Input() title = '';
    @Input() date: Date;
    constructor() {}

    ngOnInit(): void {}

    getDate() {
        const date = new Date(this.date);
        return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear()
        );
    }
    getTime() {
        const date = new Date(this.date);
        const mm = (Math.round(date.getMinutes() / 10) * 10).toLocaleString(
            'en-US',
            {
                minimumIntegerDigits: 2,
                useGrouping: false,
            }
        );
        const hh = date.getHours().toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        return hh + ':' + mm;
    }
}
