import { Component, inject, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TajamarData } from '../../core/tajamar-data';
import { HeroSlider } from '../../shared/hero-slider/hero-slider';
import { NewsCard } from '../../shared/news-card/news-card';
import { ApiService } from '../../core/api.service';
import { NewsItem } from '../../core/models';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroSlider, NewsCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private api = inject(ApiService);
  data = inject(TajamarData);

  @ViewChildren('statEl') statEls!: QueryList<ElementRef<HTMLElement>>;

  recentNews = toSignal(
    this.api.getNoticias().pipe(
      map(ns => ns.slice(0, 3).map(n => ({
        id: String(n.id),
        title: n.title,
        category: n.category,
        date: n.date,
        excerpt: n.excerpt,
        href: n.href,
        image: n.image
      } as NewsItem)))
    ),
    { initialValue: [] as NewsItem[] }
  );

  stats = toSignal(
    this.api.getStats(),
    { initialValue: [] as { value: number; suffix: string; label: string }[] }
  );

  ngAfterViewInit(): void {
    // Se ejecuta cuando los elementos carguen desde la API
    this.statEls.changes.subscribe(() => {
      if (this.statEls.length > 0) {
        this.setupCounterAnimation();
      }
    });
    if (this.statEls.length > 0) {
      this.setupCounterAnimation();
    }
  }

  private setupCounterAnimation(): void {
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
}

