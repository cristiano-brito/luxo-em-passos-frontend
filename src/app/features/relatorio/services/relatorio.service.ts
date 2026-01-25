import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { LuxoService } from '../../../services/luxo.service';
import { Sandalia } from '../../../models/luxo.models';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private luxoService: LuxoService) { }

  obterEstatisticasDashboard(): Observable<any> {
    return this.luxoService.getEstatisticasVendas();
  }

  atualizarFiltro(periodo: 'HOJE' | 'MES' | 'TOTAL'): void {
    this.luxoService.setFiltro(periodo);
  }

  obterTopSpenders(limite: number = 5): Observable<any[]> {
    return this.luxoService.getClientes().pipe(
      map(clientes => [...clientes]
        .sort((a, b) => b.gastoAcumulado - a.gastoAcumulado)
        .slice(0, limite)
      )
    );
  }

  obterEstoqueCritico(limite: number = 5): Observable<Sandalia[]> {
    return this.luxoService.getSandalias().pipe(
      map(sandalias => sandalias
        .filter(s => s.estoque <= limite)
        .sort((a, b) => a.estoque - b.estoque)
      )
    );
  }

  obterFaturamentoMensal(): Observable<any> {
    return this.luxoService.vendas$.pipe(
      map(vendas => {
        const faturamentoPorMes: { [key: string]: number } = {};

        vendas.filter(v => v.status === 'FINALIZADO').forEach(v => {
          const data = new Date(v.dataHora);
          const mesAno = data.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }).toUpperCase();
          faturamentoPorMes[mesAno] = (faturamentoPorMes[mesAno] || 0) + v.valorTotal;
        });

        return {
          labels: Object.keys(faturamentoPorMes),
          values: Object.values(faturamentoPorMes)
        };
      })
    );
  }

  obterVendasParaRelatorio(): Observable<any[]> {
    return combineLatest([
      this.luxoService.vendas$,
      this.luxoService.getSandalias() // Precisamos das sandálias para ver o custo
    ]).pipe(
      map(([vendas, sandalias]) => {
        const relatorioFormatado: any[] = [];

        vendas.filter(v => v.status === 'FINALIZADO').forEach(pedido => {
          pedido.itens.forEach(item => {
            // Encontra a sandália original para pegar o preço de custo
            const infoOriginal = sandalias.find(s => s.sku === item.sandalia.sku);
            const custoTotal = (infoOriginal?.precoCusto || 0) * item.quantidade;
            const vendaTotal = item.precoVendaNoAto * item.quantidade;
            const lucro = vendaTotal - custoTotal;

            relatorioFormatado.push({
              data: new Date(pedido.dataHora).toLocaleDateString('pt-BR'),
              cliente: pedido.cliente.nome,
              produto: item.sandalia.modelo,
              qtd: item.quantidade,
              valorVenda: vendaTotal,
              lucro: lucro,
              margem: (lucro / vendaTotal) * 100 // Margem em %
            });
          });
        });

        return relatorioFormatado.reverse();
      })
    );
  }
}
