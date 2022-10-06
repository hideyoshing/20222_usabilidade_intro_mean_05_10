import { Component } from '@angular/core';
import { Cliente } from './cliente/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula_05_10';
  clientes: Cliente[] = [];
  onClienteAdicionado(cliente: Cliente) {
    this.clientes = [...this.clientes, cliente];
  }
}
