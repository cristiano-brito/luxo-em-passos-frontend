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
