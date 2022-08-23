import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-catalog',
  template: `
  <div>
    <div class="text-2" routerLink="products" routerLinkActive="text-active">Products</div>
    <div class="text-2" routerLink="offers" routerLinkActive="text-active">Offers</div>
    <div class="text-2" routerLink="lastminute" routerLinkActive="text-active">Lastminute</div>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
