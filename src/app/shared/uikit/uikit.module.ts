import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../widgets/counter.component';
import { BoxComponent } from './components/box.component';
import { ColComponent } from './components/col.component';
import { GridComponent } from './components/grid.component';
import { UrlDirective } from './directives/url.directive';

const COMPONENTS = [
  BoxComponent,
  ColComponent,
  GridComponent,
  UrlDirective,
  CounterComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  exports:[...COMPONENTS],
  imports: [
    CommonModule,
  ]
})
export class UikitModule { }
