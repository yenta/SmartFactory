import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

import {CompanyService} from './company.service';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyTableComponent,
    CompanyDetailComponent,
    EmployeeTableComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
