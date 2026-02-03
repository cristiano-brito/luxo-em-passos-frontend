import { Injectable } from '@angular/core';
import { LuxoService } from '../../../services/luxo.service';
import { map, Observable } from 'rxjs';
import { Cliente, Endereco } from '../../../models/luxo.models';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API = 'api/clientes';

  constructor(
    private luxoData: LuxoService,
    private http: HttpClient,
  ) {}

  listarTodos(): Observable<Cliente[]> {
    return this.http
      .get<ApiResponse<Cliente[]>>(this.API)
      .pipe(map((res) => res.dados));
  }

  adicionar(cliente: Cliente): Observable<Cliente> {
    const payload = {
      ...cliente,
      endereco: this.isValidEndereco(cliente.endereco) ? cliente.endereco : undefined,
    };
    return this.http
      .post<ApiResponse<Cliente>>(this.API, payload)
      .pipe(map((res) => res.dados));
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

  private isValidEndereco(e?: Endereco): boolean {
    return !!(e?.logradouro?.trim() && e?.cep?.trim() && e?.uf?.trim());
  }
}
