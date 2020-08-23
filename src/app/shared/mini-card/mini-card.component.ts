import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-mini-card',
    templateUrl: './mini-card.component.html',
    styleUrls: ['./mini-card.component.css'],
})
export class MiniCardComponent implements OnInit {
    constructor() {}
    @Input() title = '';
    @Input() imagePath =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7MbSryJLKEbP11ZhqHU9Ku4sNHJ4XE_mYRw&usqp=CAU';
    @Input() link = '';
    @Input() subText =
        'פה אתה תכתוב תקציר כזה ואם אתה לא אז לא יהיה פה כלום וזה ממש מעפן ש אין קליק מושך כזה מאוד ועד מילים ארוכות כפרה';
    @Input() date: Date;

    ngOnInit(): void {}
}
