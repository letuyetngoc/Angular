import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-luyenTap-ghe',
    template: `
    <button class="ghe"
        [ngClass]="{'gheDaDat':gheInput.TrangThai,'gheDangDat':TTgheDangChon}"
        [disabled]="gheInput.TrangThai"
        (click)="ChangeColorGhe()"
    >
        {{gheInput.SoGhe}}
    </button>
    <ng-content></ng-content>
    `,
    styleUrls: ['../BaiTapDatGhe/ghe.scss']
})

export class LuyenTapGheComponent implements OnInit {
    @Input() gheInput!: Ghe
    TTgheDangChon: boolean = false
    ChangeColorGhe(): void {
        this.TTgheDangChon = !this.TTgheDangChon
        this.gheDaChon.emit(this.gheInput)
    }
    @Output() gheDaChon = new EventEmitter()


    constructor() { }
    ngOnInit() { }
}
interface Ghe {
    SoGhe: number,
    TenGhe: string,
    Gia: number,
    TrangThai: boolean
}