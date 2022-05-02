import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './About/About.component';
import { HeaderHomeComponent } from './Components/HeaderHome.component';
import { ContactComponent } from './Contact/Contact.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';

//Cấu hình route cho home
import { Routes, RouterModule } from '@angular/router'
import { HomeTemplateComponent } from './Template/HomeTemplate.component';
const homeRoutes: Routes = [
    {
        path: '', component: HomeTemplateComponent, children: [
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    }
]

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, RouterModule.forChild(homeRoutes)],
    exports: [],
    declarations: [HomeComponent, AboutComponent, ContactComponent, LoginComponent, RegisterComponent, HeaderHomeComponent, HomeTemplateComponent],
    providers: [],
})
export class HomeModule { }
