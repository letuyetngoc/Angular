import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="card text-left">
      <img class="card-img-top w-100" [src]="product.img" alt="">
      <div class="card-body">
        <h4 class="card-title">{{product.name}}</h4>
        <p class="card-text">{{product.price}}</p>
        <button (click)="viewDetail()" class="btn btn-success">View details</button>
      </div>
    </div>
    `
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product = { id: '', name: '', img: '', price: 0 }
  @Output() xemChiTiet = new EventEmitter
  viewDetail() {
    //emit(giá trị output): đưa giá trị ra ngoài thẻ
    this.xemChiTiet.emit(this.product)
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