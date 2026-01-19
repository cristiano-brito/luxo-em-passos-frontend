import { Routes } from '@angular/router';
import { HomeHubComponent } from './features/dashboard/components/home-hub/home-hub.component';
import { ClienteListComponent } from './features/cliente/components/cliente-list/cliente-list.component';
import { ClienteCadastroComponent } from './features/cliente/components/cliente-cadastro/cliente-cadastro.component';

export const routes: Routes = [
  // A rota raiz agora leva ao Hub Central
  { path: '', component: HomeHubComponent, pathMatch: 'full' },

  // Rotas de Clientes
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/cadastro', component: ClienteCadastroComponent },

  // Rota de fallback (caso o usuário digite algo inexistente, volta para o Hub)
  { path: '**', redirectTo: '' }
];
