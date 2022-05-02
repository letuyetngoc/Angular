import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './DemoInput/ProductList.component';

@Component({
    selector: 'app-props',
    template: `
    <div class="container">
        <h3>Input-Output</h3>
        <div class="form-group">
            <p>id</p>
            <input class="form-control" [(ngModel)]="product.id"/>
        </div>
        <div class="form-group">
            <p>name</p>
            <input class="form-control" [(ngModel)]="product.name"/>
        </div>
        <div class="form-group">
            <p>price</p>
            <input class="form-control" [(ngModel)]="product.price"/>
        </div>
        <div class="form-group">
            <button (click)="addProduct()" class="btn btn-success">Add product</button>
        </div>
        <app-product-list #tagProductList></app-product-list>
        <hr/>
        <div #tagDiv>Nội dung thẻ</div>
        <button (click)="ChangeInfo()">Change</button>
    </div>
    <hr/>
    <h3>Ôn tập input-output-viewchild-viewchildrent</h3>
    <app-bt-datGhe></app-bt-datGhe>
    `
})

export class PropsComponent implements OnInit {

    @ViewChild('tagProductList') tagProductList1!: ProductListComponent

    product: Product = { id: '', name: '', img: '', price: 0 }
    addProduct(): void {
        this.product.img = `https://picsum.photos/id/${this.product.id}/200/200`
        this.tagProductList1.arrProduct.push({ ...this.product })
    }

    @ViewChild('tagDiv') tagDiv!: ElementRef
    ChangeInfo(): void {
        this.tagDiv.nativeElement.innerText = "Nội dung đã thay đổi"
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