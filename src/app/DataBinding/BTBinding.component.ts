import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-binding',
    template: `
    <div class="w-50">
        <h3>Register form</h3>
        <div class="form-group">
            <p>Email</p>
            <input #emailValue class="form-control" [(ngModel)]="email"/>
        </div>
        <div class="form-group">
            <p>Fullname</p>
            <input #fullNameValue class="form-control" />
        </div>
        <div class="form-group">
            <button (click)="changeFullname(fullNameValue.value)" class="btn btn-success" type="submit">Submit</button>
        </div>
        <div class="form-group">
            <p>Email: {{email}}</p>
            <p>FulName: {{fullName}}</p>
        </div>
    </div>
    `
})

export class BTBindingComponent implements OnInit {
    fullName: string = "fullname"
    email: string = "email"

    changeFullname(fullName: string): void {
        this.fullName = fullName
    }
    constructor() { }

    ngOnInit() { }
}