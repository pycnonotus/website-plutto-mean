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
    'https://i.pinimg.com/originals/45/ae/f5/45aef5cc24a0402fc44cbeb9d63fdee6.png';
  @Input() link = '';
  ngOnInit(): void {}
}
