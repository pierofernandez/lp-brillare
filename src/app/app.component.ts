import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;
  submenus: { [key: string]: boolean } = {
    'terapias-submenu': false,
    'talleres-submenu': false
  };

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) this.closeAllSubmenus();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.closeAllSubmenus();
  }

  toggleSubmenu(submenuId: string, event: Event): void {
    event.preventDefault();
    this.submenus[submenuId] = !this.submenus[submenuId];
    Object.keys(this.submenus).forEach(key => {
      if (key !== submenuId) this.submenus[key] = false;
    });
  }

  private closeAllSubmenus(): void {
    Object.keys(this.submenus).forEach(key => {
      this.submenus[key] = false;
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('#mobile-menu') && !target.closest('#menu-toggle') && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth >= 1024 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
