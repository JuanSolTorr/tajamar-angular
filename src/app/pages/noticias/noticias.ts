import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TajamarData } from '../../core/tajamar-data';
import { NewsCard } from '../../shared/news-card/news-card';

@Component({
  selector: 'app-noticias',
  imports: [RouterLink, NewsCard],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  data = inject(TajamarData);

  readonly categories = [
    { id: 'all', label: 'Todas' },
    { id: 'admisiones', label: 'Admisiones' },
    { id: 'actividades', label: 'Actividades' },
    { id: 'logros', label: 'Logros' },
    { id: 'fp', label: 'FP' },
    { id: 'institucional', label: 'Institucional' },
  ];

  activeFilter = signal('all');

  filteredNews = computed(() =>
    this.activeFilter() === 'all'
      ? this.data.news
      : this.data.news.filter(n => n.category === this.activeFilter())
  );

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }
}

