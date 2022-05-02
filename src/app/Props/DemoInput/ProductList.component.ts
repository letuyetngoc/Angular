import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductItemComponent } from './ProductItem.component';

@Component({
    selector: 'app-product-list',
    template: `
    <div class="row container">
        <div *ngFor="let prod of arrProduct" class="col-4">
            <app-product-item (xemChiTiet)="xemChiTiet1($event)" [product]="prod"></app-product-item>
        </div>
        <hr/>
        <div class="mt-2" >
            <input [(ngModel)]="percent" class="form-control" placeholder="Input %"/>
            <button (click)="changePrice()" class="btn btn-danger mt-2">Change price</button>
        </div>
        <!-- $event là mặc định -->
    </div>
    <div class="row container mt-4">
            <div class="col-4">
                <h3>{{SPChiTiet.name}}</h3>
                <img [src]="SPChiTiet.img" height="200"/>
            </div>
            <div class="col-8">
                <h3>Chi tiết sản phẩm</h3>
                <table class="table ">
                    <tr>
                        <th>ID</th>
                        <th>{{SPChiTiet.id}}</th>
                    </tr>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>{{SPChiTiet.name}}</th>
                    </tr>
                    <tr>
                        <th>Giá</th>
                        <th>{{SPChiTiet.price}}</th>
                    </tr>
                    
                </table>
            </div>
        </div>
    `
})

export class ProductListComponent implements OnInit {

    arrProduct: Product[] = [
        { id: '1', name: 'IphoneX', img: 'https://picsum.photos/id/10/200', price: 1000 },
        { id: '2', name: 'IphoneY', img: 'https://picsum.photos/id/20/200', price: 2000 },
        { id: '3', name: 'IphoneZ', img: 'https://picsum.photos/id/30/200', price: 3000 },
    ]

    SPChiTiet: Product = { id: '1', name: 'IphoneX', img: 'https://picsum.photos/id/10/200', price: 1000 }
    xemChiTiet1(outputValue: Product) {
        this.SPChiTiet = outputValue
    }

    @ViewChildren(ProductItemComponent) arrTagProductItem!: QueryList<ProductItemComponent>
    percent: number = 0
    changePrice(): void {
        this.arrTagProductItem.forEach((productItem: ProductItemComponent, index: number) => {
            productItem.product.price = productItem.product.price * (100 - this.percent) / 100
        })
    }

    constructor() { }

    ngOnInit() { }
}
interface Product {
    id: string,
    name: string,
    img: string,
    price: number
}