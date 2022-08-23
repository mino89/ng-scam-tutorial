import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNewsComponent } from './home-news.component';



@NgModule({
  declarations: [HomeNewsComponent],
  exports: [HomeNewsComponent],
  imports: [
    CommonModule,
    UikitModule
  ]
})
export class HomeNewsModule { }
