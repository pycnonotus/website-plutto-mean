import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';
import { News } from '../news/news.model';
import { NewsService } from './../news/news.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    rawNews: News[] = [];
    private postsSubscription: Subscription;
    constructor(
        public mainService: MainService,
        private appRef: ApplicationRef,
        private newsService: NewsService
    ) {}
    ngOnInit() {
        setTimeout(() => {
            // maybe is a an ugly fix but it works "^^
            this.mainService.setVideoListener(true);
        }, 1);
        this.newsService.loadNews();
        this.postsSubscription = this.newsService
            .getNewsUpdatedListener()
            .subscribe((newsData) => {
                this.rawNews = newsData.data;
            });
    }
    ngOnDestroy() {
        this.mainService.setVideoListener(false);
        this.postsSubscription.unsubscribe();
    }
}
