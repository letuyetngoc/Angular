import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div>
    Hello Ngoc!
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
