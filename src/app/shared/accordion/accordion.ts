import { Component, Input, signal } from '@angular/core';
import { AccordionItem } from '../../core/models';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  @Input({ required: true }) items: AccordionItem[] = [];

  openId = signal<string | null>(null);

  toggle(id: string): void {
    this.openId.update(current => current === id ? null : id);
  }
}

