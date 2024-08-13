import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  translate = inject(TranslationService);
  isDropdownVisible = false;
  isGermanChecked = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  ngOnInit() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.switchLanguage(savedLanguage);
      this.isGermanChecked = savedLanguage === 'de'; 
    }
  }

  onLanguageChange(event: any) {
    const selectedLanguage = event.target.checked ? 'de' : 'en';
    
    localStorage.setItem('selectedLanguage', selectedLanguage);
    this.translate.switchLanguage(selectedLanguage);
    this.isGermanChecked = event.target.checked;
  }
}
