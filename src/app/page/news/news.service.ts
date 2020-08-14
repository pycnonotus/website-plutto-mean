import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { News } from './news.model';

const ipAddres = '85.65.61.221:3000'; //localhost:3000
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsUpdated = new Subject<{ data: News[]; message: string }>();

  constructor(private http: HttpClient, private router: Router) {}
  addNews(
    title: string,
    category: number,
    htmlString: string,
    imagePath: string,
    subText: string
  ) {
    console.log(title, category, htmlString);

    const newsData = new FormData();
    let data = {
      title,
      imagePath: imagePath,
      text: htmlString,
      topic: category,
      subText,
    };

    console.log(data);

    return this.http
      .post('http://' + ipAddres + '/api/newsManger', data)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  loadNews() {
    this.http
      .get<any>('http://' + ipAddres + '/api/newsManger')
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
  getNew(id: string) {
    const ret = this.http.get<{
      id: string;
      title: string;
      content: string;
      imagePath: string;
      category: number;
      subText: string;
      date: Date;
    }>('http://localhost:3000/api/newsManger/' + id);
    console.log(ret);

    return ret;
  }
}
