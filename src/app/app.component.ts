import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'website';

  showSubVideos = false;
  videoSubs: Subscription;
  constructor(public mainService: MainService) {}
  ngOnInit() {
    this.videoSubs = this.mainService.getVideoListener().subscribe((bool) => {
      this.showSubVideos = bool;
    });
  }
  ngOnDestroy() {
    this.videoSubs.unsubscribe();
  }
}
