import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
    <div class="bg-danger text-white p-5 text-center">
        SideBar Component
    </div>
    `
})

export class SideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}