import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class="bg-dark text-white text-center p-5">
        Footer Component
    </div>
    `
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}