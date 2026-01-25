import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Salva qualquer dado no localStorage convertido para JSON.
   */
  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Recupera um dado e o converte de volta para o tipo original (T).
   * Exemplo de uso: storage.get<Pedido[]>('vendas')
   */
  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;

    try {
      return JSON.parse(data) as T;
    } catch (error) {
      console.error(`Erro ao converter dado do storage para a chave: ${key}`, error);
      return null;
    }
  }

  /**
   * Remove um item específico.
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Limpa todo o armazenamento local do domínio.
   */
  clear(): void {
    localStorage.clear();
  }
}
