import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastminuteRoutingModule } from './lastminute-routing.module';
import { LastminuteComponent } from './lastminute.component';


@NgModule({
  declarations: [LastminuteComponent],
  imports: [
    CommonModule,
    LastminuteRoutingModule
  ]
})
export class LastminuteModule { }
