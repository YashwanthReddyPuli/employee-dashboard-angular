import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighSalary]',
  standalone: false
})
export class HighSalaryDirective implements OnInit {
  @Input('appHighSalary') salary: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (Number(this.salary) >= 100000) {
      this.el.nativeElement.style.backgroundColor = 'rgba(239, 68, 68, 0.15)'; // Deep red tint
      this.el.nativeElement.style.color = '#fca5a5'; // Light red text
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.borderLeft = '4px solid #ef4444'; // Red intense border
    }
  }
}