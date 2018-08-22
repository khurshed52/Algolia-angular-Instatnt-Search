import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgAisModule } from 'angular-instantsearch';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { PriceComponent } from './header/price/price.component';
import { LoginComponent } from './header/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    ContactComponent,
    PriceComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgZorroAntdModule,
    NgAisModule.forRoot(),
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US } ]
})
export class AppModule { }
