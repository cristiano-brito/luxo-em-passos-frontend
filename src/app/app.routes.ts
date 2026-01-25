import { Routes } from '@angular/router';
import { HomeHubComponent } from './features/dashboard/components/home-hub/home-hub.component';
import { ClienteListComponent } from './features/cliente/components/cliente-list/cliente-list.component';
import { ClienteCadastroComponent } from './features/cliente/components/cliente-cadastro/cliente-cadastro.component';
import { SandaliaListComponent } from './features/sandalia/components/sandalia-list/sandalia-list.component';
import { PedidoFormComponent } from './features/venda/components/pedido-form/pedido-form.component';
import { VendaListComponent } from './features/venda/components/venda-list/venda-list.component';
import { RelatorioDashboardComponent } from './features/relatorio/components/relatorio-dashboard/relatorio-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeHubComponent, pathMatch: 'full' },

  {
    path: 'clientes',
    children: [
      { path: '', component: ClienteListComponent }, // Rota: /clientes
      { path: 'cadastro', component: ClienteCadastroComponent }, // Rota: /clientes/cadastro
    ],
  },

  {
    path: 'sandalias',
    children: [
      { path: '', component: SandaliaListComponent }, // Rota: /sandalias
      // { path: 'cadastro', component: SandaliaCadastroComponent }, // Futura rota de cadastro
    ],
  },

  {
    path: 'vendas',
    children: [
      { path: '', component: VendaListComponent },
      { path: 'novo-pedido', component: PedidoFormComponent }, // Rota: /venda/novo-pedido
    ],
  },

  {
    path: 'relatorios',
    children: [
      { path: '', component: RelatorioDashboardComponent }, // Rota: /relatorios
    ],
  },

  { path: '**', redirectTo: '' },
];
