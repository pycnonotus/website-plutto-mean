import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from './news.model';
import { NewsService } from './news.service';
import { TypeNews } from './../../type-news.enum';
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    rawNews: News[] = [];
    maxPosts = 3;
    getPriority = this.getENUM(TypeNews);
    typeFilter = [true, false, false, false, false];
    private postsSubscription: Subscription;
    constructor(private news: NewsService) {}
    getENUM(ENUM: any) {
        let myEnum = [];
        let objectEnum = Object.keys(ENUM);
        const values = objectEnum.slice(0, objectEnum.length / 2);
        const keys = objectEnum.slice(objectEnum.length / 2);

        for (let i = 0; i < objectEnum.length / 2; i++) {
            myEnum.push({ key: keys[i], value: values[i] });
        }
        return myEnum;
    }
    ngOnInit(): void {
        this.news.loadNews();
        this.postsSubscription = this.news
            .getNewsUpdatedListener()
            .subscribe((newsData) => {
                this.rawNews = newsData.data;
            });
    }

    scrollTo(element: HTMLElement): void {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
    increaseMaxPost(): void {
        ++this.maxPosts;
        ++this.maxPosts;
        ++this.maxPosts;
    }
}
