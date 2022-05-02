import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
    <div class="container" style="margin-bottom:500px">
        databinding
        <app-oneway-binding></app-oneway-binding>
        <hr/>
        <app-twoway-binding></app-twoway-binding>
        <hr/>
        <app-bt-binding></app-bt-binding>
    </div>
    `
})

export class DataBindingComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}