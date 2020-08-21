import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
    constructor() {}
    isMousePress = false;

    ngOnInit(): void {}

    onMouseDown() {
        this.isMousePress = false;
        console.log('mouse is down');
    }
}
