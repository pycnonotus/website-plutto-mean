import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  rawNews: News[] = [];
  private postsSubscription: Subscription;
  constructor(private news: NewsService) {}

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
}
