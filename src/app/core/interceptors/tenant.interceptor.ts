import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantId = localStorage.getItem('tenant') || 'luxo-default';

  // Só adiciona o header se a requisição for para a nossa API
  if (req.url.startsWith(environment.apiUrl)) {
    const tenantReq = req.clone({
      setHeaders: {
        'X-Tenant-ID': tenantId
      }
    });
    return next(tenantReq);
  }

  return next(req);
};
