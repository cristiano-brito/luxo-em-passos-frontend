import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Cliente, Sandalia, Pedido, ItemPedido, StatusPedido } from '../models/luxo.models';
import { StorageService } from '../core/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LuxoService {
  private vendasSubject = new BehaviorSubject<Pedido[]>([]);
  public vendas$ = this.vendasSubject.asObservable();

  private clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Sophia Loren',
      email: 'sophia@luxury.com',
      telefone: '(11) 99999-8888',
      perfil: 'BLACK',
      gastoAcumulado: 8750.0,
      dataCadastro: '2025-01-01',
      endereco: {
        logradouro: 'Via Appia',
        numero: '100',
        bairro: 'Centro',
        cidade: 'Roma',
        uf: 'IT',
      },
    },
    {
      id: 2,
      nome: 'Gisele Bundchen',
      email: 'gisele@vogue.com',
      telefone: '(11) 98888-7777',
      perfil: 'GOLD',
      gastoAcumulado: 2500.0,
      dataCadastro: '2025-05-15',
      endereco: {
        logradouro: 'Av. Brasil',
        numero: '500',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
      },
    }
  ];

  private sandalias: Sandalia[] = [
    {
      sku: 'SND-001',
      modelo: 'Scarpin Dourado VIP',
      tamanho: 36,
      categoria: 'SCARPIN',
      precoCusto: 685.7,
      precoVenda: 1200.0,
      estoque: 10,
      imageUrl: 'assets/images/produtos/scarpin-gold.jpg',
    },
    {
      sku: 'SND-002',
      modelo: 'Sandália Minimalist Black',
      tamanho: 37,
      categoria: 'RASTEIRINHA',
      precoCusto: 566.6,
      precoVenda: 850.0,
      estoque: 15,
      imageUrl: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop',
    },
    {
      sku: 'SND-003',
      modelo: 'Stiletto Red Velvet',
      tamanho: 35,
      categoria: 'SALTO_ALTO',
      precoCusto: 833.3,
      precoVenda: 1500.0,
      estoque: 5,
      imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400',
    },
    {
      sku: 'SND-004',
      modelo: 'Plataforma Crystal Shine',
      tamanho: 38,
      categoria: 'EDICAO_LIMITADA',
      precoCusto: 840.0,
      precoVenda: 2100.0,
      estoque: 3,
      imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=600&auto=format&fit=crop',
    },
  ];

  constructor(private storage: StorageService) {
    this.hidratarDados();
  }

  private hidratarDados(): void {
    const vendasSalvas = this.storage.get<Pedido[]>('vendas');
    if (vendasSalvas) {
      this.vendasSubject.next(vendasSalvas);
    }
  }

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  adicionarCliente(novoCliente: Cliente): Observable<Cliente> {
    const id = this.clientes.length + 1;
    const clienteComId = { ...novoCliente, id };
    this.clientes.push(clienteComId);
    return of(clienteComId);
  }

  excluirCliente(id: number): Observable<boolean> {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  private incrementarGastoCliente(id: number, valor: number): void {
    const cliente = this.clientes.find(c => c.id === id);
    if (cliente) {
      cliente.gastoAcumulado += valor;
    }
  }

  getSandalias(): Observable<Sandalia[]> {
    return of(this.sandalias);
  }

  baixarEstoque(sku: string, quantidade: number): Observable<boolean> {
    const sandalia = this.sandalias.find((s) => s.sku === sku);
    if (sandalia && sandalia.estoque >= quantidade) {
      sandalia.estoque -= quantidade;
      return of(true);
    }
    return of(false);
  }

  atualizarSandalia(sandaliaEditada: Sandalia): Observable<boolean> {
    const index = this.sandalias.findIndex(s => s.sku === sandaliaEditada.sku);
    if (index !== -1) {
      this.sandalias[index] = sandaliaEditada;
      return of(true);
    }
    return of(false);
  }

  excluirSandalia(sku: string): Observable<boolean> {
    const index = this.sandalias.findIndex((s) => s.sku === sku);
    if (index !== -1) {
      this.sandalias.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  finalizarPedido(cliente: Cliente, itensSelecionados: ItemPedido[]): Observable<Pedido> {
    // 1. Validar estoque de todos os itens antes de começar
    const estoqueOk = itensSelecionados.every(item => {
      const s = this.sandalias.find(sand => sand.sku === item.sandalia.sku);
      return s && s.estoque >= item.quantidade;
    });

    if (!estoqueOk) {
      throw new Error('Um ou mais itens ficaram sem estoque durante a transação.');
    }

    const novoPedido: Pedido = {
      protocolo: Math.random().toString(36).substring(2, 10).toUpperCase(),
      cliente: cliente,
      status: StatusPedido.FINALIZADO,
      dataHora: new Date(),
      itens: itensSelecionados,
      valorTotal: itensSelecionados.reduce((acc, item) => acc + (item.precoVendaNoAto * item.quantidade), 0)
    };

    itensSelecionados.forEach(item => {
      this.baixarEstoque(item.sandalia.sku, item.quantidade).subscribe();
    });

    if (cliente.id) {
      this.incrementarGastoCliente(cliente.id, novoPedido.valorTotal);
    }

    const listaAtualizada = [...this.vendasSubject.value, novoPedido];
    this.vendasSubject.next(listaAtualizada);
    this.storage.save('vendas', listaAtualizada);

    return of(novoPedido);
  }

/**
 * Cancela um pedido, estorna o estoque e subtrai o gasto do cliente.
 */
  cancelarPedido(protocolo: string): Observable<boolean> {
    const vendas = this.vendasSubject.value;
    const index = vendas.findIndex(p => p.protocolo === protocolo);

    if (index !== -1 && vendas[index].status !== StatusPedido.CANCELADO) {
      const pedido = vendas[index];

      // 1. Estornar Estoque
      pedido.itens.forEach(item => {
        const sandalia = this.sandalias.find(s => s.sku === item.sandalia.sku);
        if (sandalia) {
          sandalia.estoque += item.quantidade;
        }
      });

      // 2. Estornar Gasto do Cliente
      if (pedido.cliente.id) {
        const cliente = this.clientes.find(c => c.id === pedido.cliente.id);
        if (cliente) {
          cliente.gastoAcumulado -= pedido.valorTotal;
        }
      }

      // 3. Atualizar Status e Persistir
      pedido.status = StatusPedido.CANCELADO;
      vendas[index] = { ...pedido }; // Imutabilidade

      this.vendasSubject.next([...vendas]);
      this.storage.save('vendas', vendas);

      return of(true);
    }

    return of(false);
  }
}
