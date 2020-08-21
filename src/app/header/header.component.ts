import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private elRef: ElementRef) {}
  leftX = 0;
  leftWidth = 0;

  savedX = 0;
  savedWidth = 0;
  public catagories: { name: string; path: any }[] = [
    { name: 'דף הבית', path: '' },
    { name: 'חדשות', path: 'news' },
    { name: 'עולם הסרביבל', path: 'survival' },
    { name: 'עולם המיני-גיימס', path: 'minigames' },
    { name: 'חנות השרת', path: '/shop' },
    { name: 'תמיכה', path: 'support' },
    { name: 'אודות', path: 'about' },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      const btn = document.querySelector('.mat-primary');
      if (btn) {
        btn.dispatchEvent(new Event('click'));
        (btn as any).click(); // idk why but  no click on element google plz fix
      }
    }, 1000);
  }

  private getPosition(el) {
    console.dir(el);

    let xPos = 0;
    let yPos = 0;

    while (el) {
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos,
    };
  }

  moveLine(element) {
    const el = element.srcElement;

    const x = this.getPosition(el);

    this.leftX = x.x - 0;
    this.leftWidth = el.offsetWidth + 0;
    this.savedWidth = 0;
    this.savedX = 0;
  }

  onHover(element): void {
    this.savedX = this.leftX;
    this.savedWidth = this.leftWidth;
    const el = element.srcElement;
    const x = this.getPosition(el);
    this.leftX = x.x - 0;
    this.leftWidth = el.offsetWidth + 0;
  }
  onDeHover(element): void {
    if (this.savedX && this.savedWidth) {
      this.leftX = this.savedX;
      this.leftWidth = this.savedWidth;
    }
  }

  toString(): string {
    return `x${this.leftX} w${this.leftWidth}\nox:${this.savedX} ow${this.savedWidth}`;
  }
}
