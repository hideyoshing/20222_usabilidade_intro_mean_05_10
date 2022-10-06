import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  // clientes = [
  //   {
  //     nome: 'José',
  //     fone: '12345678',
  //     email: 'jose@email.com'
  //   },
  //   {
  //     nome: 'Maria',
  //     fone: '87654321',
  //     email: 'maria@email.com'
  //   }
  // ]

  @Input() clientes: Cliente[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
