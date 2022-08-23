import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-home-carousel',
  template: `
    <fb-grid>
      <fb-col>
        <fb-box size="xl" [showLogo]="true"></fb-box>
      </fb-col>
    </fb-grid>

    <fb-grid>
      <fb-col>
        <fb-box size="md" [showLogo]="true"></fb-box>
      </fb-col>
      <fb-col>
        <fb-box size="md" [showLogo]="true"></fb-box>
      </fb-col>
    </fb-grid>
  `,
  styles: [
  ]
})
export class HomeCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
