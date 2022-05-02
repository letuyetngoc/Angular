import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoAntdComponent } from './DemoAntd.component';
import { DemoTableComponent } from './DemoTable.component';
import { AntdModule } from 'src/_core/common/_module/AntdModule/Antd.module';
import { DemoMaterialComponent } from './DemoMaterial.component';
import { MaterialModule } from 'src/_core/common/_module/MaterialModule/Material.module';


@NgModule({
    imports: [CommonModule, FormsModule, AntdModule, MaterialModule],
    exports: [DemoAntdComponent],
    declarations: [DemoAntdComponent, DemoTableComponent, DemoMaterialComponent],
    providers: [],
})
export class DemoAntdModule { }
