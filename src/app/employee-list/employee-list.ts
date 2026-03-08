import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  searchText: string = '';
  selectedDepartment: string = '';
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  editingId: number | null = null;
  editSalary: number | null = null;
  editDepartment: string = '';
  currentSort: string = '';

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.employees$.subscribe(data => {
      this.employees = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    let results = this.employees;

    if (this.searchText) {
      const term = this.searchText.toLowerCase();
      results = results.filter(emp => 
        emp.name.toLowerCase().includes(term) || 
        emp.email.toLowerCase().includes(term) ||
        emp.role.toLowerCase().includes(term) ||
        emp.department.toLowerCase().includes(term)
      );
    }

    if (this.selectedDepartment) {
      results = results.filter(emp => emp.department === this.selectedDepartment);
    }

    this.filteredEmployees = results;
    this.applySort();
  }

  handleSortChange() {
    this.applySort();
  }

  applySort() {
    if (!this.currentSort) return;
    
    const [criteria, directionStr] = this.currentSort.split('_');
    const direction = directionStr === 'asc' ? 1 : -1;

    if (criteria === 'name') {
      this.filteredEmployees.sort((a, b) => a.name.localeCompare(b.name) * direction);
    } else if (criteria === 'salary') {
      this.filteredEmployees.sort((a, b) => (Number(a.salary) - Number(b.salary)) * direction);
    }

    this.filteredEmployees = [...this.filteredEmployees];
  }

  resetFilters() {
    this.searchText = '';
    this.selectedDepartment = '';
    this.currentSort = '';
    this.applyFilters();
  }

  deleteEmployee(id: number) {
    if(confirm("Are you sure you want to delete this record?")) {
      this.empService.deleteEmployee(id).subscribe({
        error: (err) => console.error('Failed to delete employee', err)
      });
    }
  }

  startEdit(emp: Employee) {
    this.editingId = emp.id;
    this.editSalary = typeof emp.salary === 'string' ? Number(emp.salary) : emp.salary;
    this.editDepartment = emp.department;
  }

  cancelEdit() {
    this.editingId = null;
  }

  saveEdit(emp: Employee) {
    if (this.editSalary !== null && this.editDepartment) {
      this.empService.updateEmployee(emp.id, { salary: this.editSalary, department: this.editDepartment }).subscribe({
        next: () => {
          this.editingId = null;
        },
        error: (err) => console.error('Failed to update employee', err)
      });
    }
  }
}