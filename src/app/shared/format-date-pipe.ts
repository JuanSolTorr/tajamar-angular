import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(isoDate: string): string {
    const date = new Date(isoDate + 'T00:00:00');
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}

