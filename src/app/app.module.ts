import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './page/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { SurvivalComponent } from './page/survival/survival.component';
import { MinigameComponent } from './page/minigame/minigame.component';
import { ShopComponent } from './page/shop/shop.component';
import { SupportComponent } from './page/support/support.component';
import { AboutComponent } from './page/about/about.component';
import { AdminComponent } from './page/admin/admin.component';
import { MinigamesComponent } from './page/admin/minigames/minigames.component';
import { MinigamesAdminComponent } from './page/admin/minigames-admin/minigames-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SubVideoComponent } from './sub-video/sub-video.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NewsComponent } from './page/news/news.component';
import { MiniameListComponent } from './minigame/miniame-list/miniame-list.component';
import { MiniameListItemComponent } from './minigame/miniame-list-item/miniame-list-item.component';
import { MiniameListDetilComponent } from './minigame/miniame-list-detil/miniame-list-detil.component';
import { AdminMainComponent } from './page/admin/admin-main/admin-main.component';
import { FooterComponent } from './footer/footer.component';
import { AdminNewsComponent } from './page/admin/admin-news/admin-news.component';
import { MatTableModule } from '@angular/material/table';
import { AdminNewsCreateComponent } from './page/admin/admin-news/admin-news-create/admin-news-create.component';
import { AdminNewsListComponent } from './page/admin/admin-news/admin-news-list/admin-news-list.component';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './shared/mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SurvivalComponent,
    MinigameComponent,
    ShopComponent,
    SupportComponent,
    AboutComponent,
    AdminComponent,
    MinigamesComponent,
    MinigamesAdminComponent,
    MainNavComponent,
    LoginComponent,
    SingupComponent,
    SubVideoComponent,
    NewsComponent,
    MiniameListComponent,
    MiniameListItemComponent,
    MiniameListDetilComponent,
    AdminMainComponent,
    FooterComponent,
    AdminNewsComponent,
    AdminNewsCreateComponent,
    AdminNewsListComponent,
    CardComponent,
    MiniCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    CommonModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MatSelectModule,
    HttpClientModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
