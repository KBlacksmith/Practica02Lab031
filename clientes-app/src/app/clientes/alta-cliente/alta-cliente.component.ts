import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nombre: "",
    curp: "",
    direccion: "",
    sexo: 0
  };
  grupos: Grupo[] = [];
  constructor(private clienteService: ClientesService) {

  }

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }
  nuevoCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }
}
