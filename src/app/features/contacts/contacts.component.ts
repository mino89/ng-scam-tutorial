import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-contacts',
  template: `
  <fb-grid>
  <fb-col>
  </fb-col>
  <fb-col>
    <fb-box [showLogo]="false" size="xs"></fb-box>
    <fb-box [showLogo]="false" size="xs"></fb-box>
    <fb-box [showLogo]="false" bg="highlight" size="xs">SUBMIT</fb-box>
  </fb-col>
  <fb-col>
  </fb-col>
</fb-grid>


<fb-counter></fb-counter>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
