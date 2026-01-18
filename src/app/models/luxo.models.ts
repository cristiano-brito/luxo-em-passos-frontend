export type PerfilFidelidade = 'STANDARD' | 'GOLD' | 'BLACK';

export interface Endereco {
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
}

export interface Cliente {
  id?: number;
  nome: string;
  telefone: string;
  email: string;
  dataCadastro?: string | Date;
  endereco: Endereco;
  perfil: PerfilFidelidade;
  gastoAcumulado: number;
}

export interface Sandalia {
  sku: string;
  nome: string;
  preco: number;
  estoque: number;
}

export interface Pedido {
  protocolo: string;
  cliente: Cliente;
  itens: ItemPedido[];
  valorTotal: number;
  data: Date;
  status: 'GERADO' | 'FINALIZADO' | 'CANCELADO';
}

export interface ItemPedido {
  sandalia: Sandalia;
  quantidade: number;
  precoUnitario: number;
}
