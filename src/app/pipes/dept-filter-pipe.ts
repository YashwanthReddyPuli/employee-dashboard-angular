import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'deptFilter',
  standalone: false
})
export class DeptFilterPipe implements PipeTransform {
  transform(employees: Employee[], department: string): Employee[] {
    if (!employees || !department) {
      return employees;
    }
    return employees.filter(emp => emp.department === department);
  }
}