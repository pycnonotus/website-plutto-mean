import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slied-item',
    templateUrl: './slied-item.component.html',
    styleUrls: ['./slied-item.component.css'],
})
export class SliedItemComponent implements OnInit {
    imgSrc =
        'https://akamai-webcdn.blackdesertonline.com/bdo/resources/news/a74f1728247076be009f6dffb61d7e7f.jpg';
    @Input() isActive = false;
    constructor() {}

    ngOnInit(): void {}
}
