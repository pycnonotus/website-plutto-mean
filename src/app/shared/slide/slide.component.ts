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
    @ViewChild('sliderBody', { static: true }) slider: ElementRef;
    ngOnInit(): void {}

    onMouseDown(ev) {
        this.isMousePress = true;
        this.slider.nativeElement.classList.add('active');
        // console.log(ev.pageX);
        // console.log('====================================');
        // console.log(this.slider.nativeElement.offsetLeft);
        // console.log('====================================');
        this.scrollLeft = this.slider.nativeElement.scrollLeft;
        this.startX = ev.pageX - this.slider.nativeElement.offsetLeft;
        console.log(this.startX);
    }
    onMouseUp() {
        this.mouseNoneActive();
    }
    onMouseMove(event) {
        // event.stopPropagation();

        if (!this.isMousePress) {
            return; // so I don't do anything if mouse ian't pressed
        }
        event.preventDefault();
        const x = event.pageX - this.slider.nativeElement.offsetLeft;
        const moveBy = this.startX - x;
        this.slider.nativeElement.scrollLeft -= moveBy * 0.25;
    }
    onMouseLeave() {
        this.mouseNoneActive();
    }
    private mouseNoneActive(): void {
        this.isMousePress = false;
        this.slider.nativeElement.classList.remove('active');
    }
}
