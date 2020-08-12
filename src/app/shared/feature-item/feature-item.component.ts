import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css'],
})
export class FeatureItemComponent implements OnInit {
  constructor() {}
  @Input() title = '';
  @Input() imagePath =
    'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/ef/b0/8c/efb08c81-500a-a70d-5b8c-5a60170359f9/pr_source.png/643x0w.png';
  @Input() link = '';
  ngOnInit(): void {}
}
