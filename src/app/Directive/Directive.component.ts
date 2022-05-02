import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
    <div class="container" style="margin-bottom: 500px;">
        <div *ngIf="status; else divDangNhap">
            <p>Hello {{userName}}</p>
        </div>
        <!-- mặc định ng-template ko hiển thị lên giao diện -->
        <ng-template #divDangNhap>
            <button class="btn btn-danger"(click)="dangNhap()">Đăng xuất</button>
        </ng-template>
        <hr/>
        <h3>ngSwitch</h3>
        <div class="form-group w-25">
            <h3>Nhập số:</h3>
            <input class="form-control" #so/>
            <button (click)="checkNumber(so.value)" class="btn btn-danger mt-2">Kiểm tra</button>
        </div>
        <div *ngIf="number%2===0" class="alert alert-danger">Số chẵn</div>
        <div *ngIf="number%2!==0" class="alert alert-success">Số lẻ</div>
        <hr/>
        <div >
            <select class="form-group w-25" #sl [(ngModel)]="maChucVu">
                <option class="form-control" value="1">Giám đốc</option>
                <option class="form-control" value="2">Quản lí</option>
                <option class="form-control" value="3">Nhân viên</option>
            </select>
            <div class="form-group" [ngSwitch]="maChucVu">
                <div *ngSwitchCase="'1'" class="alert alert-danger">Giám đốc</div>
                <div *ngSwitchCase="'2'" class="alert alert-primary">Quản lí</div>
                <div *ngSwitchCase="'3'" class="alert alert-success">Nhân viên</div>
                <div *ngSwitchDefault class="alert alert-success">Mặc định</div>
            </div>
        </div>
        <hr/>
        <h3>ngFor-ngClass</h3>
        <table class="table">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr [ngClass]="{'bg-dark text-white': i%2===0}" *ngFor="let product of arrProduct; let i =index">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td><img [src]="product.img" width="50" height="50"/></td>
                <button class="btn btn-danger">Xóa</button>
            </tr>
        </tbody>
        </table>
        <h3>Products list</h3>
        <div class="row">
            <div class="card col-4" *ngFor="let prod of arrProduct; let i = index">
                <div class="card-header">
                    <img [src]="prod.img" class="w-100"/>
                </div>
                <div class="card-body">
                    <p>{{prod.name}}</p>
                    <p>{{prod.price}}</p>
                </div>
            </div>
        </div>
        <hr/>
        <h3>ng-content thường dùng để truyền giao diện</h3>
        <app-card>
            <p class="name">Iphone</p>
            <p class="price" >1000</p>
    </app-card>
    <hr/>
    <h3>*ngStyle</h3>
    <p [ngStyle]="{'font-size':fontSize+'px'}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus consectetur consequuntur nulla aperiam enim facere accusantium blanditiis quia totam ipsum provident doloremque repellat delectus, fuga iusto deleniti corrupti iure tenetur.</p>
    <button (click)="changFont(5)" class="btn btn-success mr-2">+</button>
    <button (click)="changFont(-5)" class="btn btn-success ml-2">-</button>
    <hr/>
    <h3>Bài tập Login</h3>
    <ap-bt-login></ap-bt-login>
    <hr/>
    <h3>BÀI TẬP DANH SÁCH SẢN PHẨM</h3>
    <app-btDanhSachSanPham></app-btDanhSachSanPham>
    </div>
    
    `
})

export class DirectiveComponent implements OnInit {

    status: boolean = false
    userName: string = 'ngocle@cybersoft'

    number: number = 0

    fontSize: number = 17
    changFont(number: number) {
        this.fontSize += number
    }

    maChucVu: string = '0'

    arrProduct: Product[] = [{ id: 1, name: "Iphone", price: 1000, img: "https://i.pravatar.cc?u=1" }, { id: 1, name: "IphoneX", price: 2000, img: "https://i.pravatar.cc?u=2" }, { id: 1, name: "SamSung", price: 3000, img: "https://i.pravatar.cc?u=3" }]

    dangNhap(): void {
        this.status = true
    }
    checkNumber(so: string): void {
        this.number = Number(so)
    }

    constructor() { }

    ngOnInit() { }
}
interface Product {
    id: number
    name: string
    price: number
    img: string
}