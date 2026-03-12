import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NewsCard } from '../../shared/news-card/news-card';
import { ApiService } from '../../core/api.service';
import { NewsItem } from '../../core/models';

@Component({
  selector: 'app-noticias',
  imports: [RouterLink, NewsCard],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  private api = inject(ApiService);

  readonly categories = [
    { id: 'all', label: 'Todas' },
    { id: 'admisiones', label: 'Admisiones' },
    { id: 'actividades', label: 'Actividades' },
    { id: 'logros', label: 'Logros' },
    { id: 'fp', label: 'FP' },
    { id: 'institucional', label: 'Institucional' },
  ];

  activeFilter = signal('all');

  private allNews = toSignal(
    this.api.getNoticias().pipe(
      map(ns => ns.map(n => ({
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

  filteredNews = computed(() => {
    const news = this.allNews();
    const filter = this.activeFilter();
    return filter === 'all' ? news : news.filter(n => n.category === filter);
  });

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }
}

