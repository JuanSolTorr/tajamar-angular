import { Component, inject, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TajamarData } from '../../core/tajamar-data';
import { HeroSlider } from '../../shared/hero-slider/hero-slider';
import { NewsCard } from '../../shared/news-card/news-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroSlider, NewsCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  data = inject(TajamarData);

  @ViewChildren('statEl') statEls!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.statEls.forEach(el => {
        const target = Number(el.nativeElement.dataset['target']);
        el.nativeElement.textContent = target.toLocaleString('es-ES');
      });
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target as HTMLElement);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    this.statEls.forEach(el => obs.observe(el.nativeElement));
  }

  private animateCounter(el: HTMLElement): void {
    const target = Number(el.dataset['target']);
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('es-ES');
      if (current < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  recentNews() {
    return this.data.news.slice(0, 3);
  }
}

