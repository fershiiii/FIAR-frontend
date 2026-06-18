import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  readonly http = inject(HttpClient);
  readonly apiUrl = environment.apiUrl;

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  registrarClientes(): Observable<Cliente> {
    const nuevoCliente: Cliente = {
      id: 0,
      nombre: 'Nuevo Cliente',
      activo: true,
    };
    return this.http.post<Cliente>(`${this.apiUrl}/clientes`, nuevoCliente);
  }
}
