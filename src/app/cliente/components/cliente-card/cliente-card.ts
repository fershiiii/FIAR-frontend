import { Component, input } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';

@Component({
  selector: 'app-cliente-card',
  imports: [],
  templateUrl: './cliente-card.html',
  styleUrl: './cliente-card.css',
})
export class ClienteCard {
  cliente = input.required<Cliente>()
}
