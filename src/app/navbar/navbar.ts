import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
// This must be NavbarComponent to match the AppModule above
export class NavbarComponent {
  @Output() viewChange = new EventEmitter<string>();

  onNavClick(view: string) {
    this.viewChange.emit(view);
  }
}