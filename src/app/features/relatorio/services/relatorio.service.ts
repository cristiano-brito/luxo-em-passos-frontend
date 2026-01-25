import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
}
