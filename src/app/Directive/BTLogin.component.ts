import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-bt-login',
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li *ngIf="!isLogin" class="nav-item" data-toggle="modal" data-target="#modelId">
                    <a class="nav-link" href="#">Login</a>
                </li> 
                <li *ngIf="isLogin" class="nav-item" data-toggle="modal" data-target="#modelId">
                    <a class="nav-link" href="#">User {{name}}</a>
                </li> 
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                            <h5 class="modal-title">Login</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="form-group">
                            <p>User name:</p>
                            <input #nameTag class="form-control"/>
                        </div>
                        <div class="form-group">
                            <p>Password:</p>
                            <input #passwordTag class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button (click)="handleSave(nameTag.value, passwordTag.value) " id="closeBtn" type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    `
})

export class BTLoginComponent implements OnInit {
    name: string = ''
    isLogin: boolean = false
    handleSave(name: string, password: string): void {
        if (name === 'cybersoft' && password === 'cybersoft') {
            this.name = name
            this.isLogin = true
        }
        (<HTMLElement>document.getElementById('#closeBtn')).click()
    }
    constructor() { }

    ngOnInit() { }
}