import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {
  clientes: Cliente[] = [];

  clientes$: Observable<Cliente[]> = new Observable<Cliente[]>();
  clientesSubscription: Subscription = new Subscription();
  constructor(private clienteService: ClientesService) { }

  ngOnDestroy(): void{
    this.clientesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.clientes$ = this.clienteService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe((response:Cliente[])=>this.clientes = response);
  }

  onBorrarCliente(cliente: Cliente){
    console.log("yeah", cliente);
    this.clienteService.borrarCliente(cliente);
  }

}
