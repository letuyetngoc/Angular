import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

//module trung gian chứa các module của antd

@NgModule({
    imports: [NzButtonModule, NzIconModule, NzCascaderModule, NzTableModule, NzBadgeModule, NzDropDownModule, NzDividerModule],
    exports: [NzButtonModule, NzIconModule, NzCascaderModule, NzTableModule, NzBadgeModule, NzDropDownModule, NzDividerModule],
})
export class AntdModule { }
