import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit {
  empForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      role: ['', [Validators.required]],
      department: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  saveRecord() {
    if (this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: () => {
          this.router.navigate(['/database']);
        }
      });
    }
  }
}