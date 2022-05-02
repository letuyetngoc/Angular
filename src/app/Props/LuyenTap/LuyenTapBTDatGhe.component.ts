import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as _ from "lodash"
import { LuyenTapGheComponent } from './LuyenTapGhe.component';

@Component({
    selector: 'app-luyenTap-BTDatGhe',
    template: `
    <div class="container w-50" style="margin-bottom: 500px;">
        <h3 class="text-warning text-center">ĐẶT VÉ XE BUÝT HÃNG CYBERSOFT</h3>
        <div class="row ">
            <div class="col-6  ">
                <h3 class=" bg-secondary text-center">Tài xế</h3>
                <app-luyenTap-ghe 
                [gheInput]="ghe" 
                *ngFor="let ghe of arrGhe; let index=index"
                (gheDaChon)="ThemGheDaChon($event)"
                >
                    <br *ngIf="(index+1)%4===0"/>
                </app-luyenTap-ghe>
            </div>
            <div class="col-6">
                <h3 class="text-warning">Danh sách ghế đã đặt</h3>
                <p *ngFor="let gheDaChon of arrGheDaChon">
                    Ghế: 
                    <span>{{gheDaChon.TenGhe}} </span>
                <span>{{gheDaChon.Gia}}$</span>
                <span (click)="huyGhe(gheDaChon.SoGhe)" style="cursor: pointer;" class="text-danger">[Hủy]</span></p>
            </div>
        </div>
    </div>
    `
})

export class LuyenTapBTDatGheComponent implements OnInit {
    arrGhe: Ghe[] = [{ SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: true },
    ]
    arrGheDaChon: Ghe[] = []
    ThemGheDaChon(gheClick: Ghe): void {
        let index = this.arrGheDaChon.findIndex(ghe => ghe.SoGhe === gheClick.SoGhe)
        if (index === -1) {
            this.arrGheDaChon.push(gheClick)
        } else {
            this.arrGheDaChon.splice(index, 1)
        }
        this.arrGheDaChon = _.orderBy(this.arrGheDaChon, ['SoGhe'])
    }
    huyGhe(soGheClick: number): void {
        this.arrGheDaChon = this.arrGheDaChon.filter(ghe => ghe.SoGhe !== soGheClick)
        this.arrTagGhe.forEach(ghe => {
            if (ghe.gheInput.SoGhe === soGheClick) {
                ghe.TTgheDangChon = false
            }
        })
    }
    @ViewChildren(LuyenTapGheComponent) arrTagGhe!: QueryList<LuyenTapGheComponent>


    constructor() { }
    ngOnInit() { }
}
interface Ghe {
    SoGhe: number,
    TenGhe: string,
    Gia: number,
    TrangThai: boolean
}