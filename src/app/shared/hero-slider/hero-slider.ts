import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  label: string;
  title: string;
  titleEm: string;
  subtitle: string;
  cta: string;
  href: string;
  cssClass: string;
}

@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.css',
})
export class HeroSlider implements OnInit, OnDestroy {
  current = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;
  private paused = false;
  touchStartX = 0;

  slides: Slide[] = [
    { label: 'Bienvenidos',           title: 'Tajamar',         titleEm: '#libresypunto',    subtitle: 'Un colegio concertado en Madrid donde cada alumno importa de verdad.',    cta: 'Conoce nuestro proyecto', href: '/proyecto-educativo', cssClass: 'hero__slide--1' },
    { label: 'Admisiones 26/27',      title: 'Proceso de',      titleEm: 'Admisiones',       subtitle: 'Plazas abiertas para el curso 2026/27. Plazas limitadas.',                cta: 'Solicitar plaza',         href: '/admisiones',         cssClass: 'hero__slide--2' },
    { label: 'Formación Profesional', title: 'Professional',    titleEm: 'Education',        subtitle: 'Grados superiores preparados para el mercado laboral real.',              cta: 'Ver FP+',                 href: '/fp',                 cssClass: 'hero__slide--3' }
  ];

  ngOnInit() { this.startAuto(); }
  ngOnDestroy() { this.stopAuto(); }

  goTo(index: number) {
    this.current.set((index + this.slides.length) % this.slides.length);
  }

  next() { this.goTo(this.current() + 1); }
  prev() { this.goTo(this.current() - 1); }

  startAuto() {
    if (this.paused) return;
    this.timer = setInterval(() => this.next(), 5500);
  }

  stopAuto() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  pause()  { this.paused = true;  this.stopAuto(); }
  resume() { this.paused = false; this.startAuto(); }

  onTouchStart(e: TouchEvent) { this.touchStartX = e.changedTouches[0].screenX; }
  onTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].screenX - this.touchStartX;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? this.next() : this.prev();
    this.stopAuto(); this.startAuto();
  }

  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft')  { this.prev(); this.stopAuto(); this.startAuto(); }
    if (e.key === 'ArrowRight') { this.next(); this.stopAuto(); this.startAuto(); }
  }
}

