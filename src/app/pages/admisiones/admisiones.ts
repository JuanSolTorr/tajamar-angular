import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admisiones',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './admisiones.html',
  styleUrl: './admisiones.css',
})
export class Admisiones {
  private fb = inject(FormBuilder);

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

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;
    // In a real app, send to backend here
    this.success.set(true);
  }

  fieldError(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted()));
  }
}

