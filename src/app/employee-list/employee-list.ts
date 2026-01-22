import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  @Input() currentView: string = 'home';
  
  searchText: string = '';
  showForm: boolean = false;
  editMode: boolean = false;

  employees: Employee[] = [
    { id: 1, name: 'Karthik', role: 'Project Lead', department: 'IT', salary: 95000 },
    { id: 2, name: 'jins', role: 'Trainee', department: 'Construction', salary: 40000 },
    { id: 3, name: 'Ravi', role: 'Manager', department: 'HR', salary: 80000 },
    { id: 4, name: 'Gagan', role: 'Senior Developer', department: 'IT', salary: 105000 },
    { id: 5, name: 'Raghavendra Bhanu Teja', role: 'Developer', department: 'IT', salary: 75000 },
    { id: 6, name: 'Karthik', role: 'Intern', department: 'Marketing', salary: 30000 },
    { id: 7, name: 'Aman', role: 'Designer', department: 'UI/UX', salary: 70000 },
    { id: 8, name: 'Yeswi', role: 'Electrical Engineer', department: 'Electrical', salary: 50000 },
    { id: 9, name: 'Munal', role: 'Software Engineer', department: 'IT', salary: 60000 },
    { id: 10, name: 'Shibu', role: 'Manager', department: 'Marketing', salary: 70000 }
  ];

  filteredEmployees: Employee[] = [...this.employees];
  currentEmployee: Employee = { id: 0, name: '', role: '', department: '', salary: 0 };

  // Stats for Home View
  getTotalPayroll() {
    return this.employees.reduce((sum, emp) => sum + emp.salary, 0);
  }

  // Dynamic Sorting
  applySort(criteria: string) {
    if (criteria === 'name') {
      this.filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'salary') {
      this.filteredEmployees.sort((a, b) => a.salary - b.salary);
    }
  }

  // Dynamic Filtering (Dropdown Based)
  applyFilter(type: string, value: string) {
    this.filteredEmployees = this.employees.filter(emp => {
      if (type === 'role') return emp.role === value;
      if (type === 'department') return emp.department === value;
      return true;
    });
  }

  // General Search Filter
  filterEmployees() {
    const term = this.searchText.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp => 
      emp.name.toLowerCase().includes(term)
    );
  }

  resetTable() {
    this.filteredEmployees = [...this.employees];
    this.searchText = '';
  }

  // CRUD Operations
  openAddForm() {
    this.editMode = false;
    this.currentEmployee = { id: this.employees.length + 1, name: '', role: '', department: '', salary: 0 };
    this.showForm = true;
  }

  editEmployee(emp: Employee) {
    this.editMode = true;
    this.currentEmployee = { ...emp };
    this.showForm = true;
  }

  saveEmployee() {
    if (this.editMode) {
      const index = this.employees.findIndex(e => e.id === this.currentEmployee.id);
      this.employees[index] = { ...this.currentEmployee };
    } else {
      this.employees.push({ ...this.currentEmployee });
    }
    this.resetTable();
    this.showForm = false;
  }

  deleteEmployee(id: number) {
    if(confirm("Delete this record?")) {
      this.employees = this.employees.filter(e => e.id !== id);
      this.resetTable();
    }
  }
}