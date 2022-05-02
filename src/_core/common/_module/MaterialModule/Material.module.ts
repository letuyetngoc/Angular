import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatDividerModule, BrowserAnimationsModule],
    exports: [MatBadgeModule, MatButtonModule, MatIconModule, MatDividerModule, BrowserAnimationsModule],
})
export class MaterialModule { }
