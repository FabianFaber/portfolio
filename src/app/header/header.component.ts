import { Component, inject, HostListener } from '@angular/core';
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
  activeSection: string = '';

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  ngOnInit() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.switchLanguage(savedLanguage);
      this.isGermanChecked = savedLanguage === 'de';
    }
    this.setActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.setActiveSection();
  }

  setActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (sectionTop <= viewportHeight / 2 && sectionBottom >= viewportHeight / 2) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    this.activeSection = currentSectionId;
  }

  onLanguageChange(event: any) {
    const selectedLanguage = event.target.checked ? 'de' : 'en';

    localStorage.setItem('selectedLanguage', selectedLanguage);
    this.translate.switchLanguage(selectedLanguage);
    this.isGermanChecked = event.target.checked;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 130; 
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToSectionDropdown(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.clientHeight : 130;
  
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.toggleDropdown();
  }
}
