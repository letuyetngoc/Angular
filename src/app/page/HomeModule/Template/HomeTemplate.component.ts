import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-template',
    template: `
    <app-headerHome></app-headerHome>
    <router-outlet></router-outlet>
    `
})

export class HomeTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}