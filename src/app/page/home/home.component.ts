import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(
        public mainService: MainService,
        private appRef: ApplicationRef
    ) {}
    ngOnInit() {
        setTimeout(() => {
            // maybe is a an ugly fix but it works "^^
            this.mainService.setVideoListener(true);
        }, 1);
    }
    ngOnDestroy() {
        this.mainService.setVideoListener(false);
    }
}
