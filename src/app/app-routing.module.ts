import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './/page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ShopComponent } from './page/shop/shop.component';
import { SupportComponent } from './page/support/support.component';
import { MinigameComponent } from './page/minigame/minigame.component';
import { SurvivalComponent } from './page/survival/survival.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },

  { path: 'support', component: SupportComponent },
  { path: 'minigames', component: MinigameComponent },
  { path: 'survival', component: SurvivalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
