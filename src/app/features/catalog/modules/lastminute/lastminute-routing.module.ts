import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastminuteComponent } from './lastminute.component';

const routes: Routes = [{ path: '', component: LastminuteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastminuteRoutingModule { }
