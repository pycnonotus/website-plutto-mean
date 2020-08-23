import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
    @ViewChild('sliderBody', { static: true }) slider: ElementRef;
    ngOnInit(): void {}

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
        this.rigth = px;
        this.slider.nativeElement.scrollLeft += px;
        let left = this.slider.nativeElement.scrollLeft;
        let x = this.slider.nativeElement.querySelector('.btn-sub-wrap');
        console.log(left);

        console.log(x);
    }
}
