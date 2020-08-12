import { Component, OnInit } from '@angular/core';
import { Survival } from './survival.model';
import { SurvivalService } from './survival.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.css'],
})
export class SurvivalComponent implements OnInit {
  featureList: Survival[] = [];
  private featureSubscription: Subscription;
  constructor(private survival: SurvivalService) {}

  ngOnInit(): void {
    this.survival.loadFeature();
    this.featureSubscription = this.survival
      .getSurvivalSUpdatedListener()
      .subscribe((data) => {
        this.featureList = data.data;
      });
    this.survival.loadFeature();
  }
}
