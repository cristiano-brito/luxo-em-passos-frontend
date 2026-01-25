import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LuxoService } from '../../../services/luxo.service';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private luxoService: LuxoService) { }

  /**
   * Atua como uma fachada (Proxy), delegando o cálculo
   * integral para o LuxoService.
   */
  obterEstatisticasDashboard(): Observable<any> {
    return this.luxoService.getEstatisticasVendas();
  }
}
