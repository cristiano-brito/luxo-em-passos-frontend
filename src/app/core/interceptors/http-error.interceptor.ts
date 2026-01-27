import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ApiResponse } from '../../models/api-response.model';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  return next(req).pipe(
    tap((event) => {
      // Caso 1: Sucesso HTTP, mas erro de negócio (sucesso: false)
      if (event instanceof HttpResponse) {
        const body = event.body as ApiResponse<any>;
        if (body && body.sucesso === false) {
          messageService.add({
            severity: 'warn',
            summary: 'Atenção',
            detail: body.mensagem,
            life: 5000
          });
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      // Caso 2: Erros de Infra/Servidor (400, 404, 500, etc)
      let msgErro = 'Ocorreu um erro inesperado';

      if (error.error && error.error.mensagem) {
        // Pega a mensagem do seu GlobalExceptionHandler do Spring
        msgErro = error.error.mensagem;
      } else if (error.status === 0) {
        msgErro = 'Não foi possível conectar ao servidor. Verifique sua conexão ou o CORS.';
      }

      messageService.add({
        severity: 'error',
        summary: `Erro ${error.status || ''}`,
        detail: msgErro,
        life: 6000
      });

      return throwError(() => error);
    })
  );
};
