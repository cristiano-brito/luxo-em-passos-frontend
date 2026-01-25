import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LuxoService } from '../../../services/luxo.service';
import { Cliente, ItemPedido, Pedido } from '../../../models/luxo.models';

@Injectable({ providedIn: 'root' })
export class VendaService {

  constructor(private luxoService: LuxoService) {}

  listarVendas(): Observable<Pedido[]> {
    return this.luxoService.getVendas().pipe(
      tap(vendas => this.luxoService.atualizarVendas(vendas))
    );
  }

  finalizarVenda(cliente: Cliente, itens: ItemPedido[]): Observable<Pedido> {
    return this.luxoService.finalizarPedido(cliente, itens);
  }

  cancelarVenda(protocolo: string): Observable<boolean> {
    return this.luxoService.cancelarPedido(protocolo);
  }
}
