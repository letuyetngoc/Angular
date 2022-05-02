import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
import { OneWayBindingComponent } from './OneWayBinding.component';
import { TwoWayBindingComponent } from './TwoWayBinding.component';
//import module hỗ trợ two-way binding
import { FormsModule } from '@angular/forms';
import { BTBindingComponent } from './BTBinding.component';

@NgModule({
    imports: [FormsModule], //import FormsModule
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent,
        OneWayBindingComponent,
        TwoWayBindingComponent,
        BTBindingComponent
    ],
    providers: [],
})
export class DataBindingModule { }
