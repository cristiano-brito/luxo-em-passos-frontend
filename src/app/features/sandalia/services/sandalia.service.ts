import { Injectable } from '@angular/core';
import { Sandalia } from '../../../models/luxo.models';
import { LuxoService } from '../../../services/luxo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SandaliaService {
  constructor(private luxoData: LuxoService) {}

  /**
   * Retorna o Observable das sandálias já com a lógica de filtro aplicada
   */
  getSandaliasFiltradas(): Observable<Sandalia[]> {
    return this.luxoData.getSandaliasFiltradas();
  }

  /**
   * Notifica o motor de busca sobre os novos termos de filtro
   */
  filtrar(termo: string, categoria: string): void {
    this.luxoData.setFiltroSandalia(termo, categoria);
  }

  getSandalias() {
    return this.luxoData.getSandalias();
  }

  excluir(sku: string) {
    return this.luxoData.excluirSandalia(sku);
  }

  atualizar(sandalia: Sandalia) {
    return this.luxoData.atualizarSandalia(sandalia);
  }

  baixarEstoque(sku: string, qtd: number) {
    return this.luxoData.baixarEstoque(sku, qtd);
  }
}
