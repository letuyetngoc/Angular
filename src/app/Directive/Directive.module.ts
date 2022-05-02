import { NgModule } from '@angular/core';
import { DirectiveComponent } from './Directive.component';
// Sử dụng directive cần sử dụng CommonModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './Card.component';
import { BTLoginComponent } from './BTLogin.component';
import { BTDanhSachSanPhamComponent } from './BTDanhSachSanPham.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent, CardComponent, BTLoginComponent, BTDanhSachSanPhamComponent],
    providers: [],
})
export class DirectiveModule { }
