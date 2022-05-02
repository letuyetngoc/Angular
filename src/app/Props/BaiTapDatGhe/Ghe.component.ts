import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ghe',
    template: `
    <button 
        (click)="HandleDatghe()"
        [disabled]="gheInput.TrangThai" 
        [ngClass]="{'gheDaDat':gheInput.TrangThai,'gheDangDat':TTgheDangDat}" 
        class="mb-3 ghe"
    >{{gheInput.SoGhe}}</button>
    <!-- <br *ngIf="gheInput.SoGhe % 4 == 0"/> -->
    <ng-content></ng-content>
    `,
    styleUrls: ['./ghe.scss']

})

export class GheComponent implements OnInit {
    @Input() gheInput!: Ghe;
    TTgheDangDat: boolean = false
    HandleDatghe(): void {
        this.TTgheDangDat = !this.TTgheDangDat
        this.gheOutput.emit(this.gheInput)
    }

    @Output() gheOutput = new EventEmitter()
    constructor() { }

    ngOnInit() { }
}
interface Ghe {
    SoGhe: number,
    TenGhe: string,
    Gia: number,
    TrangThai: boolean
}