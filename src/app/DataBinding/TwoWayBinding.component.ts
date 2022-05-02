import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-twoway-binding',
    template: `
    <div class="container">
        <h3>Twoway Binding</h3>
        <p>Họ tên: {{name}}</p>
        <!-- cách 1 -->
        <input #inputName class="form-control w-25" [value]="name" (keyup)="changeName(inputName.value)"
        (keydown)="changeName(inputName.value)" (keypress)="changeName(inputName.value)"/>
        <!-- cách 2 -->
        <input #inputName class="form-control w-25" [(ngModel)]="name"/>
        <hr/>
        <p>VD với Object</p>
        <div class="d-flex justify-content-around">
            <div class="card w-25 mt-4">
                <img [src]="product.img"/>
                <div class="card-body">
                    <p>{{product.name}}</p>
                    <p>{{product.price}}</p>
                </div>
                <div class="card-footer">
                    <button  class="btn btn-dark">Add to card</button>
                </div>
            </div>
            <div class="w-50 ml-3">
                <div class="form-group">
                    <p>Id</p>
                    <input #id class="form-control" [(ngModel)]="product.id"/>
                </div>
                <div class="form-group">
                    <p>Name</p>
                    <input #name1 class="form-control" [(ngModel)]="product.name"/>
                </div>
                <div class="form-group">
                    <p>Price</p>
                    <input #price class="form-control" [(ngModel)]="product.price"/>
                </div>
                <div class="form-group">
                    <p>Img</p>
                    <input #img class="form-control" [(ngModel)]="product.img"/>
                </div>
                <div class="form-group">
                    <button (click)="changeProduct(id.value,name1.value,price.value,img.value)" class="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    </div>`
})

export class TwoWayBindingComponent implements OnInit {
    name: string = 'Ngoc'
    product: Product = { id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/20/200' }

    changeName(newName: string): void {
        this.name = newName
    }

    changeProduct(id: string, name: string, price: string, img: string): void {
        this.product.id = Number(id)
        this.product.name = name
        this.product.img = img
        this.product.price = Number(price)

    }
    constructor() { }
    ngOnInit() { }

}
interface Product {
    id: number,
    name: string,
    price: number,
    img: string
}