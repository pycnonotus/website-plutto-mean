import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Survival } from './survival.model';

const ipAddres = '85.65.61.221:3000'; //localhost:3000

@Injectable({
    providedIn: 'root',
})
export class SurvivalService {
    private feature = new Subject<{ data: Survival[] }>();
    constructor(private http: HttpClient, private router: Router) {}
    loadFeature() {
        this.http
            .get<any>('http://' + ipAddres + '/api/featureManger')
            .subscribe((responseData) => {
                this.feature.next({ data: responseData.data });
            });
    }
    getSurvivalSUpdatedListener() {
        return this.feature.asObservable();
    }
}
