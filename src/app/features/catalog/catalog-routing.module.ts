import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
      { path: 'offers', loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersModule) },
      { path: 'lastminute', loadChildren: () => import('./modules/lastminute/lastminute.module').then(m => m.LastminuteModule) },
      { path:'', redirectTo:'products'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
