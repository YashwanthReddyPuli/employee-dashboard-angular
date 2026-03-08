import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';
  private employeeList = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeeList.asObservable();

  constructor(private http: HttpClient) {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<Employee[]>(this.apiUrl).subscribe(data => {
      this.employeeList.next(data);
    });
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const current = this.employeeList.value;
    const maxId = current.length > 0 ? Math.max(...current.map(e => e.id)) : 0;
    employee.id = maxId + 1;
    
    return this.http.post<Employee>(this.apiUrl, employee).pipe(
      tap(() => this.fetchEmployees())
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.fetchEmployees())
    );
  }

  updateEmployee(id: number, changes: Partial<Employee>): Observable<Employee> {
    return this.http.patch<Employee>(`${this.apiUrl}/${id}`, changes).pipe(
      tap(() => this.fetchEmployees())
    );
  }

  getTotalPayroll(): number {
    return this.employeeList.value.reduce((sum, emp) => sum + Number(emp.salary), 0);
  }
}