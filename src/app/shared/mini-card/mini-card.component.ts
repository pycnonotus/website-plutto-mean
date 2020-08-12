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
    'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/ef/b0/8c/efb08c81-500a-a70d-5b8c-5a60170359f9/pr_source.png/643x0w.png';
  @Input() link = '';
  @Input() subText =
    'פה אתה תכתוב תקציר כזה ואם אתה לא אז לא יהיה פה כלום וזה ממש מעפן ש אין קליק מושך כזה מאוד ועד מילים ארוכות כפרה';
  @Input() date = '02.03.20';

  ngOnInit(): void {}
}
