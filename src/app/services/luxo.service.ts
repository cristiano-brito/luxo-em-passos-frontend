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
    },
    {
      id: 3,
      nome: 'Audrey Hepburn',
      email: 'audrey@breakfast.com',
      telefone: '(11) 97777-6666',
      perfil: 'BLACK',
      gastoAcumulado: 12400.50,
      dataCadastro: '2025-02-10',
      endereco: {
        logradouro: '5th Avenue',
        numero: '727',
        bairro: 'Manhattan',
        cidade: 'New York',
        uf: 'NY'
      }
    },
    {
      id: 4,
      nome: 'Naomi Campbell',
      email: 'naomi@runway.com',
      telefone: '(11) 96666-5555',
      perfil: 'GOLD',
      gastoAcumulado: 4200.00,
      dataCadastro: '2025-08-20',
      endereco: {
        logradouro: 'Bond Street',
        numero: '12',
        bairro: 'Mayfair',
        cidade: 'London',
        uf: 'UK'
      }
    },
    {
      id: 5,
      nome: 'Marilyn Monroe',
      email: 'marilyn@diamonds.com',
      telefone: '(11) 95555-4444',
      perfil: 'STANDARD',
      gastoAcumulado: 950.00,
      dataCadastro: '2025-11-05',
      endereco: {
        logradouro: 'Sunset Blvd',
        numero: '12300',
        bairro: 'Brentwood',
        cidade: 'Los Angeles',
        uf: 'CA'
      }
    }
  ];

  private sandalias: Sandalia[] = [
    { sku: 'SND-001', nome: 'Scarpin Dourado VIP', preco: 1200.00, estoque: 10 },
    { sku: 'SND-002', nome: 'Sandália Minimalist Black', preco: 850.00, estoque: 15 },
    { sku: 'SND-003', nome: 'Stiletto Red Velvet', preco: 1500.00, estoque: 5 },
    { sku: 'SND-004', nome: 'Plataforma Crystal Shine', preco: 2100.00, estoque: 3 }
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
