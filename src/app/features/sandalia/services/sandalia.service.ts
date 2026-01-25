import { Injectable } from '@angular/core';
import { Sandalia } from '../../../models/luxo.models';
import { LuxoService } from '../../../services/luxo.service';

@Injectable({
  providedIn: 'root',
})
export class SandaliaService {
  constructor(private luxoData: LuxoService) {}

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
