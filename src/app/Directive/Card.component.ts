import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
    <div class="row">
        <div class="card text-left col-4 ">
        <img class="card-img-top w-100 " src="https://i.pravatar.cc?u=1" alt="">
        <div class="card-body">
            <h4 class="card-title">
                <ng-content selector=".name"></ng-content>
            </h4>
            <p class="card-text text-danger">
                <ng-content selector=".price"></ng-content>
            </p>
        </div>
        </div>
    </div>
    `
})

export class CardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}