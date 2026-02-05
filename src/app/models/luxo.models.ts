export type PerfilFidelidade = 'STANDARD' | 'GOLD' | 'BLACK';

export interface Endereco {
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  uf?: string;
}

export interface Cliente {
  id?: number;
  nome: string;
  cpf: string;
  telefone?: string;
  email?: string;
  dataCadastro?: string;
  endereco?: Endereco;
  perfil: PerfilFidelidade;
  gastoTotalAcumulado: number;
}

export type Categoria = 'RASTEIRINHA' | 'SALTO_ALTO' | 'SCARPIN' | 'EDICAO_LIMITADA';

export interface Sandalia {
    sku: string;         // Identificador único (Id)
    modelo: string;
    tamanho: number;
    categoria: Categoria;
    precoCusto: number;
    precoVenda: number;
    estoque: number;
    imageUrl?: string;   // Opcional (?) pois no início o lojista pode não ter a foto
}

export enum StatusPedido {
  ABERTO = 'ABERTO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO'
}

export interface ItemPedido {
  id?: number;
  sandalia: Sandalia;
  quantidade: number;
  precoVendaNoAto: number;
}

export interface Pedido {
  id?: number;
  protocolo: string;
  cliente: Cliente;
  status: StatusPedido;
  dataHora: Date;
  valorTotal: number;
  itens: ItemPedido[];
}
