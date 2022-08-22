import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-home',
  template: `
    <p>
      home works!
    </p> <fb-grid>
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


  <fb-grid>
    <fb-col>
      <fb-box size="md">1</fb-box>
    </fb-col>
    <fb-col>
      <fb-box size="md">2</fb-box>
    </fb-col>
    <fb-col>
      <fb-box size="md">3</fb-box>
    </fb-col>
    <fb-col>
      <fb-box size="md">4</fb-box>
    </fb-col>
  </fb-grid>

  <fb-counter></fb-counter>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
