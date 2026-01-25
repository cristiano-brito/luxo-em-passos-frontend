import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LuxoService } from '../../../services/luxo.service';

@Injectable({ providedIn: 'root' })
export class RelatorioService {
  constructor(private luxoService: LuxoService) { }

  obterEstatisticasDashboard(): Observable<any> {
    return this.luxoService.getEstatisticasVendas();
  }

  atualizarFiltro(periodo: 'HOJE' | 'MES' | 'TOTAL'): void {
    this.luxoService.setFiltro(periodo);
  }
}
