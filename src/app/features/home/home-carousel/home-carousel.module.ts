import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel.component';



@NgModule({
  declarations: [HomeCarouselComponent],
  exports: [HomeCarouselComponent],
  imports: [
    CommonModule,
    UikitModule
  ]
})
export class HomeCarouselModule { }
