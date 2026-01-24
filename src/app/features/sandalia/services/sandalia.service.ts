import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sandalia } from '../../../models/luxo.models';
import { LuxoService } from '../../../services/luxo.service';

@Injectable({
  providedIn: 'root'
})
export class SandaliaService {

  constructor(private luxoData: LuxoService) { }

  /**
   * Retorna a lista completa de sandálias do acervo
   */
  getSandalias(): Observable<Sandalia[]> {
    return this.luxoData.getSandalias();
  }

  /**
   * Busca uma sandália específica pelo SKU
   * Útil para ver detalhes ou iniciar uma venda
   */
  buscarPorSku(sku: string): Observable<Sandalia | undefined> {
    return new Observable(observer => {
      this.luxoData.getSandalias().subscribe(lista => {
        const item = lista.find(s => s.sku === sku);
        observer.next(item);
        observer.complete();
      });
    });
  }

  /**
   * Atualiza o estoque após uma transação
   */
  atualizarEstoque(sku: string, qtd: number): Observable<boolean> {
    return this.luxoData.baixarEstoque(sku, qtd);
  }
}
