import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isDropdownVisible = false;

  toggleDropdown() {
    console.log("Burger Menu clicked");
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
