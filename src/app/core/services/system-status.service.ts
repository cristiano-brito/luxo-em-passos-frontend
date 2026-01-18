import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemStatusService {

  constructor() { }

  // BehaviorSubject permite que qualquer componente "escute" o status
  private isSynced = new BehaviorSubject<boolean>(true);
  status$ = this.isSynced.asObservable();

  // Futuramente, esta função será chamada pelo seu interceptor de API
  updateStatus(sync: boolean) {
    this.isSynced.next(sync);
  }
}
