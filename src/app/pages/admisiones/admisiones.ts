import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-admisiones',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './admisiones.html',
  styleUrl: './admisiones.css',
})
export class Admisiones {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellidos: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    etapa: ['', Validators.required],
    curso: [''],
    mensaje: [''],
    privacidad: [false, Validators.requiredTrue]
  });

  submitted = signal(false);
  success = signal(false);
  error = signal('');
  loading = signal(false);

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set('');

    const { nombre, apellidos, email, telefono, etapa, mensaje } = this.form.value;

    this.api.enviarContacto({
      nombre: nombre!,
      apellidos: apellidos!,
      email: email!,
      telefono: telefono || undefined,
      etapa: etapa!,
      mensaje: mensaje || undefined
    }).subscribe({
      next: () => {
        this.success.set(true);
        this.loading.set(false);
        this.form.reset();
        this.submitted.set(false);
      },
      error: () => {
        this.error.set('Ha ocurrido un error al enviar la solicitud. Inténtalo de nuevo.');
        this.loading.set(false);
      }
    });
  }

  fieldError(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted()));
  }
}

