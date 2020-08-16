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
    'https://cdn.mos.cms.futurecdn.net/LvNXk2LvkwfFxhgUk2j5WL.jpg';
  @Input() link = '';
  ngOnInit(): void {}
}
