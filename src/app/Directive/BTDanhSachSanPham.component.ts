import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-btDanhSachSanPham',
    template: `
    <div class="card">
        <div class="card-header bg-dark">
            <span class="text-white pt-2">Quản lí danh mục sản phẩm</span>
        </div>
        <div class="card-body">
            <div class="form-group">
                <p>Mã SP</p>
                <input #maSP class="form-control" [(ngModel)]="sanPhamInput.maSP" />
            </div>
            <div class="form-group">
                <p>Tên SP</p>
                <input #tenSP class="form-control" [(ngModel)]="sanPhamInput.tenSP" />
            </div>
            <div class="form-group">
                <p>Giá</p>
                <input #giaSP class="form-control" [(ngModel)]="sanPhamInput.giaSP"/>
            </div>
            <div class="form-group">
                <button (click)="handleThemSP()" class="btn btn-success">Thêm sản phẩm</button>
            </div>
        </div>
    </div>
    <table class="table mt-3">
        <thead class="bg-dark text-white">
            <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr [ngClass]="{'bg-secondary':i%2!==0}" *ngFor="let sp of arrSanPham;let i =index">
                <td>{{i+1}}</td>
                <td>{{sp.maSP}}</td>
                <td>{{sp.tenSP}}</td>
                <td>{{sp.giaSP}}</td>
                <td ><button class="btn btn-danger">Xóa</button></td>
            </tr>
        </tbody>
    </table>
    `
})

export class BTDanhSachSanPhamComponent implements OnInit {

    sanPhamInput: SanPham = { maSP: '', tenSP: '', giaSP: 0 }
    arrSanPham: SanPham[] = []
    handleThemSP() {
        this.arrSanPham.push({ ...this.sanPhamInput })
    }

    constructor() { }

    ngOnInit() { }
}
interface SanPham {
    maSP: string,
    tenSP: string,
    giaSP: number
}