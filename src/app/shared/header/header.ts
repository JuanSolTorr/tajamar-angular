import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen  = signal(false);
  scrolled  = signal(false);
  backToTop = signal(false);

  /** Track which dropdown is open by id ('oferta' | 'tajamar' | null) */
  activeDropdown = signal<string | null>(null);

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.scrolled.set(y > 60);
    this.backToTop.set(y > 400);
  }

  toggleMenu() {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.style.overflow = next ? 'hidden' : '';
    if (!next) this.activeDropdown.set(null);
  }

  closeMenu() {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
    this.activeDropdown.set(null);
  }

  toggleDropdown(id: string, event: Event) {
    event.preventDefault();
    this.activeDropdown.set(this.activeDropdown() === id ? null : id);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

