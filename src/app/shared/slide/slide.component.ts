import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { News } from 'src/app/page/news/news.model';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
    constructor() {}
    isMousePress = false;
    startX = 0;
    scrollLeft = 0;
    rigth = 0;
    active = 1;
    timeOut = false;
    leftest = 0;
    @Input() newsRaw: News[];
    @ViewChild('sliderBody', { static: true }) slider: ElementRef;
    ngOnInit(): void {
        // this.slider.nativeElement.scrollLeft += 432 * -2;
        this.leftest = this.slider.nativeElement.scrollLeft;
    }

    onMouseDown(ev) {
        this.isMousePress = true;
        this.slider.nativeElement.classList.add('active');
        this.scrollLeft = this.slider.nativeElement.scrollLeft;
        this.startX = ev.pageX - this.slider.nativeElement.offsetLeft;
    }
    onMouseUp() {
        this.mouseNoneActive();
    }
    onMouseMove(event) {
        if (!this.isMousePress) {
            return; // so I don't do anything if mouse ian't pressed
        }
        event.preventDefault();
        const x = event.pageX - this.slider.nativeElement.offsetLeft;
        const moveBy = this.startX - x;
        this.moveLeft(moveBy * 0.05);
    }
    onMouseLeave() {
        this.mouseNoneActive();
    }
    private mouseNoneActive(): void {
        this.isMousePress = false;
        this.slider.nativeElement.classList.remove('active');
    }
    moveLeft(px: number): void {
        if (px > 0) {
            // TODO change this logic
            this.active--;
            if (this.active <= 0) {
                this.active = 1;
                return;
            }
        } else {
            this.active++;
            if (this.active > this.newsRaw.length) {
                this.active = this.newsRaw.length;
                return;
            }
        }

        this.timeOut = true;
        setTimeout(() => {
            this.timeOut = false;
        }, 300);
        if (this.active > 0) {
            // this.rigth = px;
            this.slider.nativeElement.scrollLeft =
                this.leftest + (this.newsRaw.length - this.active) * 432 + 200;
        } else {
            this.slider.nativeElement.scrollLeft =
                this.leftest + this.newsRaw.length * 432;
        }
        console.log(this.slider.nativeElement.scrollLeft);
    }
}
