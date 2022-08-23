import { HomeNewsModule } from './home-news/home-news.module';
import { HomeCarouselModule } from './home-carousel/home-carousel.module';
import { UikitModule } from './../../shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UikitModule,
    HomeRoutingModule,
    HomeCarouselModule,
    HomeNewsModule
  ]
})
export class HomeModule { }
