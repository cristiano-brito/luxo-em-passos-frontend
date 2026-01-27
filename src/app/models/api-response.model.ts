export interface ApiResponse<T> {
  sucesso: boolean;      // Indica se a operação foi concluída
  mensagem: string;     // Descrição amigável do resultado ou erro
  dados: T;             // O conteúdo real da resposta (o "T" torna a interface genérica)
  timestamp: string;    // Momento da resposta (ISO 8601)
  tempoProcessamentoMs: number; // Latência do servidor
}
