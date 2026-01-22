import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { EmployeeList } from './employee-list/employee-list';
// Update this line to match the class name NavbarComponent
import { NavbarComponent } from './navbar/navbar'; 

@NgModule({
  declarations: [
    App,
    EmployeeList,
    NavbarComponent // Use the correct name here as well
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  bootstrap: [App]
})
export class AppModule { }