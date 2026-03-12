import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Noticia {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string;
  href: string;
}

export interface ContactoPayload {
  nombre: string;
  apellidos: string;
  email: string;
  telefono?: string;
  etapa: string;
  mensaje?: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  // --- Noticias ---
  getNoticias(category?: string): Observable<Noticia[]> {
    const url = category
      ? `${this.base}/noticias?category=${category}`
      : `${this.base}/noticias`;
    return this.http.get<Noticia[]>(url);
  }

  getNoticia(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.base}/noticias/${id}`);
  }

  // --- Contacto / Admisiones ---
  enviarContacto(payload: ContactoPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.base}/contacto`, payload);
  }

  // --- Auth ---
  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/auth/login`, payload);
  }

  // --- Stats ---
  getStats(): Observable<{ value: string; label: string }[]> {
    return this.http.get<{ value: string; label: string }[]>(`${this.base}/stats`);
  }

  // --- Helper para peticiones autenticadas ---
  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // --- Admin: ver contactos ---
  getContactos(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.base}/contacto`, { headers: this.authHeaders() });
  }
}
