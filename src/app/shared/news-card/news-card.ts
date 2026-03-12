import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatDatePipe } from '../format-date-pipe';
import { NewsItem } from '../../core/models';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink, FormatDatePipe],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) item!: NewsItem;

  readonly categoryLabels: Record<string, string> = {
    admisiones:   'Admisiones',
    actividades:  'Actividades',
    logros:       'Logros',
    fp:           'FP TIC',
    institucional:'Institucional'
  };

  categoryLabel(): string {
    return this.categoryLabels[this.item.category] || this.item.category;
  }
}

