import { Injectable } from '@angular/core';
import { LuxoService } from '../../../services/luxo.service';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/luxo.models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private luxoData: LuxoService) {}

  listarTodos(): Observable<Cliente[]> {
    // Busca os clientes do banco fake central
    return this.luxoData.getClientes();
  }

  adicionar(cliente: Cliente): Observable<Cliente> {
    return this.luxoData.adicionarCliente(cliente);
  }

  excluir(id: number): Observable<boolean> {
    return this.luxoData.excluirCliente(id);
  }

  obterPorId(id: number) {
    return this.luxoData.getClienteById(id);
  }

  atualizar(cliente: Cliente) {
    return this.luxoData.atualizarCliente(cliente);
  }
}
