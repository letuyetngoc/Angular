import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDatGheComponent } from './BaiTapDatGhe/BaiTapDatGhe.component';
import { GheComponent } from './BaiTapDatGhe/Ghe.component';
import { ProductItemComponent } from './DemoInput/ProductItem.component';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { LuyenTapBTDatGheComponent } from './LuyenTap/LuyenTapBTDatGhe.component';
import { LuyenTapGheComponent } from './LuyenTap/LuyenTapGhe.component';
import { PropsComponent } from './Props.component';


@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [PropsComponent],
    declarations: [PropsComponent,
        ProductItemComponent,
        ProductListComponent,
        BaiTapDatGheComponent,
        GheComponent,
        LuyenTapBTDatGheComponent,
        LuyenTapGheComponent
    ],
    providers: [],
})
export class PropsModule { }
