import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-home',
  template: `

    <fb-home-carousel></fb-home-carousel>
    <fb-home-news></fb-home-news>




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
