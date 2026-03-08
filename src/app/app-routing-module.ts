import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'database', component: EmployeeList },
  { path: 'add-employee', component: AddEmployee, canActivate: [AuthGuard] },
  { path: 'employee/:id', component: EmployeeDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }