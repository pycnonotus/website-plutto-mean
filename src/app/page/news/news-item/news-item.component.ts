import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  constructor(private news: NewsService, public route: ActivatedRoute) {}

  isLoading = false;
  title = '';
  body = '';
  date: Date;
  imagePath =
    'https://i.pinimg.com/originals/9c/f5/b6/9cf5b64d6cd2963ef96eabb4b2c1cbe6.jpg';

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        console.log(' im here');

        this.news.getNew(id).subscribe((newsArray) => {
          console.log(' im here too');
          const news = newsArray[0];
          this.title = news.title;
          this.body = news.content;
          this.date = news.date;
          this.imagePath = news.imagePath;
          this.isLoading = false;
        });
      }
    });
  }
}
