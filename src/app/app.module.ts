import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PurchaseRegisterComponent } from './components/purchase-register/purchase-register.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { LoginComponent } from './security/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchaseRegisterComponent,
    PurchaseListComponent,
    LoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
