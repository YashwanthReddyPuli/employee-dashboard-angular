import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { App } from './app';
import { NavbarComponent } from './navbar/navbar';
import { Home } from './components/home/home';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeDetail } from './employee-detail/employee-detail';

import { HighSalaryDirective } from './directives/high-salary';
import { DeptFilterPipe } from './pipes/dept-filter-pipe';
import { ErrorInterceptor } from './interceptors/error-interceptor';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    Home,
    EmployeeList,
    AddEmployee,
    EmployeeDetail,
    HighSalaryDirective,
    DeptFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [App]
})
export class AppModule { }