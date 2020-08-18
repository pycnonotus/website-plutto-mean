import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
const ipAddres = '85.65.61.221:3000'; //localhost:3000
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private isAuthed = false;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  isAuth(): boolean {
    return this.isAuthed;
  }
  login(username: string, password: string) {
    const authData = { username, password };
    this.http
      .post<{ token: string; expiresIn: number; userId: string }>(
        'http://' + ipAddres + '/api/auth/login',
        authData
      )
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresIn = response.expiresIn;

            this.userId = response.userId;
            this.isAuthed = true;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiresIn * 1000);
            this.saveAuthData(token, expirationDate, response.userId);
            this.router.navigate(['/admin']);
          }
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }
  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }
  getToken(): string {
    return this.token;
  }
  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (authInfo) {
      // if there is a token
      const now = new Date();
      const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
      if (expiresIn > 0) {
        this.token = authInfo.token;
        this.isAuthed = true;
        this.userId = authInfo.userId;
        this.authStatusListener.next(true);
      }
    }
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!(token && expirationDate && userId)) {
      return;
    } else {
      return {
        token,
        expirationDate: new Date(expirationDate),
        userId,
      };
    }
  }
}
