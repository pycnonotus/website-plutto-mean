import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './/page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ShopComponent } from './page/shop/shop.component';
import { SupportComponent } from './page/support/support.component';
import { MinigameComponent } from './page/minigame/minigame.component';
import { SurvivalComponent } from './page/survival/survival.component';
import { AdminComponent } from './page/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { NewsComponent } from './page/news/news.component';
import { SubVideoComponent } from './sub-video/sub-video.component';
import { AdminMainComponent } from './page/admin/admin-main/admin-main.component';
import { AdminNewsComponent } from './page/admin/admin-news/admin-news.component';
import { AdminNewsCreateComponent } from './page/admin/admin-news/admin-news-create/admin-news-create.component';
import { AdminNewsListComponent } from './page/admin/admin-news/admin-news-list/admin-news-list.component';
import { NewsItemComponent } from './page/news/news-item/news-item.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'support', component: SupportComponent },
  { path: 'minigames', component: MinigameComponent },
  { path: 'survival', component: SurvivalComponent },
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      { path: 'main', component: AdminMainComponent },
      {
        path: 'news',
        component: AdminNewsComponent,
        children: [
          { path: 'news-list', component: AdminNewsListComponent },
          { path: 'news-create', component: AdminNewsCreateComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsItemComponent },
  {
    path: 'blop  ',

    component: SubVideoComponent,
    outlet: 'sub-header',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
