import { Component, inject, OnInit, signal } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ClienteService } from '../../services/cliente-service';
import { ClienteGrid } from '../../components/cliente-grid/cliente-grid';

@Component({
  selector: 'app-cliente-listado',
  imports: [ClienteGrid],
  templateUrl: './cliente-listado.html',
  styleUrl: './cliente-listado.css',
})
export default class ClienteListado implements OnInit {
  clientes = signal<Cliente[]>([]);
  clienteService: ClienteService = inject(ClienteService);

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.obtenerClientes().subscribe({
      next: (response) => {
        this.clientes.set(response);
      },
    });
  }

  registrarClientes() {
    this.clienteService.registrarClientes().subscribe({
      next: (response) => {
        alert(`Cliente registrado: ${response.nombre}`);
        this.cargarClientes();
      },
    });
  }
}
