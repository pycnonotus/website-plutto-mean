import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-feature-detail',
  templateUrl: './shared-feature-detail.component.html',
  styleUrls: ['./shared-feature-detail.component.css'],
})
export class SharedFeatureDetailComponent implements OnInit {
  constructor() {}

  @Input() imagePath: string = 'https://i.imgur.com/mczZJaI.jpg';

  ngOnInit(): void {}
}
