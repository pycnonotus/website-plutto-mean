import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsUpdated = new Subject<{ data: News[]; message: string }>();

  constructor(private http: HttpClient, private router: Router) {}
  addNews(title: string, category: number, htmlString: string) {
    console.log(title, category, htmlString);

    const newsData = new FormData();
    let data = {
      title,
      imagePath: '',
      text: htmlString,
      topic: category,
    };

    console.log(data);

    return this.http
      .post('http://localhost:3000/api/newsManger', data)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  loadNews() {
    this.http
      .get<any>('http://localhost:3000/api/newsManger')
      .subscribe((responseData) => {
        this.newsUpdated.next({
          data: responseData.data,
          message: 'hello there',
        });
      });
  }
  getNewsUpdatedListener() {
    return this.newsUpdated.asObservable();
  }
}
