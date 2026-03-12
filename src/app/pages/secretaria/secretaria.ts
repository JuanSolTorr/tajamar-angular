import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TajamarData } from '../../core/tajamar-data';
import { inject } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  imports: [RouterLink],
  templateUrl: './secretaria.html',
  styleUrl: './secretaria.css',
})
export class Secretaria {
  data = inject(TajamarData);
}

