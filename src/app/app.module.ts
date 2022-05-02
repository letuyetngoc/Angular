import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Component/BaiTapLayout/BaiTapLayout.module';

import { DemoComponent } from './Component/Demo/Demo.component';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DirectiveModule } from './Directive/Directive.module';
import { HeaderComponent } from './header/header.component';
import { PropsModule } from './Props/Props.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAntdModule } from './DemoAntD/DemoAntd.module';
import { HomeModule } from './page/HomeModule/Home.module';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './page/HomeModule/Home/Home.component';
import { AboutComponent } from './page/HomeModule/About/About.component';
import { ContactComponent } from './page/HomeModule/Contact/Contact.component';
import { LoginComponent } from './page/HomeModule/Login/Login.component';
import { RegisterComponent } from './page/HomeModule/Register/Register.component';

const appRouts: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
]

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent,
    //Nơi chứa thẻ component
  ],
  imports: [
    BrowserModule, // Nơi chứa các module khác muốn sử dụng cho module này (route)
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    PropsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoAntdModule,
    RouterModule.forRoot(appRouts),
    HomeModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], // Nơi import các service
  bootstrap: [AppComponent] // Các thẻ component muốn sửa dụng được trong index.html
})
export class AppModule { }
