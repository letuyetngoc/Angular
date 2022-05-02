import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-oneway-binding',
    template: `
    <div class="container">
        <h3>OnewayBinding</h3>
        <h4 class="text-danger">Cách 1: Interpolation: khi dữ liệu ở html   </h4>
        <p>{{title}}</p>
        <p>Title: {{renderTitle()}}</p>
        <input class="form-control w-50" value="{{title}}"/>
        <hr/>

        <h4 class="text-danger">Cách 2: Properties Binding khi dữ liệu ở thuộc tính của thẻ</h4>
        <p [innerHTML]="title"></p>
        <input class="form-control w-50" [value]="title"/>
        <img class="w-25 mt-2" [src]="imgSrc"/>
        <img class="w-25 mt-2" src="{{imgSrc}}"/>
        <hr/>
        
        <h4 class="text-danger">Event binding: thay đổi dữ liệu trên giao diện thông qua sự kiện (handle state react)</h4>
        <div class="form-group">
            <p>Title: {{title}}</p>
            <input #iTitle class="form-control w-25 mb-2"/>
            <!-- #iTitle tương tự document.getElementByID() -->
            <button (click)="changeTitle(iTitle.value)">Change title</button>
            <!-- (click) tương tự onClick -->
        </div>
    </div>
    `
})

export class OneWayBindingComponent implements OnInit {
    title: string = 'Hello Cybersoft!!'
    imgSrc = 'https://i.pravatar.cc?u=10'

    constructor() { }

    changeTitle(newTitle: string): void {
        this.title = newTitle
    }

    renderTitle = (): string => {
        return "Cybersoft!"
    }

    ngOnInit() { }
}