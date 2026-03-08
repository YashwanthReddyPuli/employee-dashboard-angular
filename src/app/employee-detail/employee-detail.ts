import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css'
})
export class EmployeeDetail implements OnInit {
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    this.empService.employees$.subscribe(list => {
      this.employee = list.find(e => Number(e.id) === id);

      if (!this.employee && list.length === 0) {
        this.empService.fetchEmployees();
      }
    });
  }

  goBack() {
    this.router.navigate(['/database']);
  }
}