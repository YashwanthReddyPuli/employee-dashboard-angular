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
    { id: 2, name: 'jins', role: 'Trainee', department: 'Construction', salary: 40000 },
    { id: 3, name: 'Ravi', role: 'Manager', department: 'HR', salary: 80000 },
    { id: 4, name: 'Gagan', role: 'Senior Developer', department: 'IT', salary: 105000 },
    { id: 5, name: 'Raghavendra Bhanu Teja', role: 'Developer', department: 'IT', salary: 75000 },
    { id: 6, name: 'Karthik', role: 'Intern', department: 'Marketing', salary: 30000 },
    { id: 7, name: 'Aman', role: 'Designer', department: 'UI/UX', salary:  70000 },
    { id: 8, name: 'Yeswi', role: 'Electrical Engineer', department: 'Electrical', salary: 50000 },
    { id: 9, name: 'Munal', role: 'Software Engineer', department: 'IT', salary: 60000 },
    { id: 10, name: 'Shibu', role: 'Manager', department: 'Marketing', salary: 70000 }
  
  ];
}