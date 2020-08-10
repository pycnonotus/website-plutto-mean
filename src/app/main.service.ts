import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private showSubVideos = new Subject<boolean>();
  constructor(private router: Router) {}
  getVideoListener(): Observable<boolean> {
    return this.showSubVideos.asObservable();
  }
  setVideoListener(bool: boolean): void {
    this.showSubVideos.next(bool);
  }
}
