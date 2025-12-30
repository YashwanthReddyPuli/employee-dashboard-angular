import { Component } from '@angular/core';
import { Employee } from '../employee'; 

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees: Employee[] = [
    { id: 1, name: 'Karthik', role: 'Project Lead', department: 'IT', salary: 95000 },
    { id: 2, name: 'jins', role: 'Graduate Engineer', department: 'Construction', salary: 70000 },
    { id: 3, name: 'Ravi', role: 'Manager', department: 'HR', salary: 85000 }
  ];
}