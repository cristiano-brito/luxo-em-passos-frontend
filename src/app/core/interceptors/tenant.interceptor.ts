import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantId = localStorage.getItem('tenant') || 'luxo-default';

  if (req.url.includes('/api/') || req.url.startsWith('api/')) {
    const tenantReq = req.clone({
      setHeaders: {
        'X-Tenant-ID': tenantId
      }
    });

    return next(tenantReq);
  }

  return next(req);
};
