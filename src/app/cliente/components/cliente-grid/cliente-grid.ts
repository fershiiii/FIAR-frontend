import { Component, input } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ClienteCard } from "../cliente-card/cliente-card";

@Component({
  selector: 'app-cliente-grid',
  imports: [ClienteCard],
  templateUrl: './cliente-grid.html',
  styleUrl: './cliente-grid.css',
})
export class ClienteGrid {
  clientes = input.required<Cliente[]>()
}
