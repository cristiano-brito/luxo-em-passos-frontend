import { Injectable } from '@angular/core';
import { Cliente, Sandalia } from '../models/luxo.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuxoService {
  private clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Sophia Loren',
      email: 'sophia@luxury.com',
      telefone: '(11) 99999-8888',
      perfil: 'BLACK',
      gastoAcumulado: 8750.00,
      dataCadastro: '2025-01-01',
      endereco: {
        logradouro: 'Via Appia',
        numero: '100',
        bairro: 'Centro',
        cidade: 'Roma',
        uf: 'IT'
      }
    },
    {
      id: 2,
      nome: 'Gisele Bundchen',
      email: 'gisele@vogue.com',
      telefone: '(11) 98888-7777',
      perfil: 'GOLD',
      gastoAcumulado: 2500.00,
      dataCadastro: '2025-05-15',
      endereco: {
        logradouro: 'Av. Brasil',
        numero: '500',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP'
      }
    }
  ];

  private sandalias: Sandalia[] = [
    { sku: 'SND-001', nome: 'Scarpin Dourado VIP', preco: 1200.00, estoque: 10 },
    { sku: 'SND-002', nome: 'Sandália Minimalist Black', preco: 850.00, estoque: 15 }
  ];

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  // Novo método para o formulário de cadastro usar no futuro
  adicionarCliente(novoCliente: Cliente): Observable<Cliente> {
    const id = this.clientes.length + 1;
    const clienteComId = { ...novoCliente, id };
    this.clientes.push(clienteComId);
    return of(clienteComId);
  }

  getSandalias(): Observable<Sandalia[]> {
    return of(this.sandalias);
  }
}
