import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LuxoService } from '../../../services/luxo.service';
import { Cliente, ItemPedido, Pedido } from '../../../models/luxo.models';

@Injectable({ providedIn: 'root' })
export class VendaService {

  constructor(private luxoService: LuxoService) {}

  // Apenas repassa a responsabilidade para o LuxoService
  finalizarVenda(cliente: Cliente, itens: ItemPedido[]): Observable<Pedido> {
    return this.luxoService.finalizarPedido(cliente, itens);
  }

  // Futuro método de cancelamento que também chamará o LuxoService
  cancelarVenda(protocolo: string): Observable<boolean> {
    return this.luxoService.cancelarPedido(protocolo);
  }
}
