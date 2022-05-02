import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTHeaderComponent } from './BTHeader.component';
import { ContentComponent } from './Content.Component';
import { FooterComponent } from './Footer.component';
import { SideBarComponent } from './SideBar.component';


@NgModule({
    imports: [],
    exports: [BaiTapLayoutComponent],
    declarations: [
        BaiTapLayoutComponent,
        BTHeaderComponent,
        SideBarComponent,
        ContentComponent,
        FooterComponent
    ],
    providers: [],
})
export class BaiTapLayoutModule { }
