import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
    <div class="bg-success text-center p-5">
        Content Component
    </div>
    `
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}