import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public catagories: { name: string; path: any }[] = [
    { name: 'חדשות', path: '' },
    { name: 'עולם הסרביבל', path: '/survival' },
    { name: 'עולם המיני-גיימס', path: '/minigames' },
    { name: 'חנות השרת', path: '/shop' },
    { name: 'תמיכה', path: 'support' },
    { name: 'אודות', path: 'about' },
  ];

  ngOnInit(): void {}
}
