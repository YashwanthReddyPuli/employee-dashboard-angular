import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  totalEmployees: number = 0;
  totalPayroll: number = 0;
  private sub: Subscription = new Subscription();

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.sub = this.empService.employees$.subscribe(employees => {
      this.totalEmployees = employees.length;
      this.totalPayroll = this.empService.getTotalPayroll();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}