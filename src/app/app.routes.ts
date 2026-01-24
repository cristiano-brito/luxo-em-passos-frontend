import { Routes } from '@angular/router';
import { HomeHubComponent } from './features/dashboard/components/home-hub/home-hub.component';
import { ClienteListComponent } from './features/cliente/components/cliente-list/cliente-list.component';
import { ClienteCadastroComponent } from './features/cliente/components/cliente-cadastro/cliente-cadastro.component';
import { SandaliaListComponent } from './features/sandalia/components/sandalia-list/sandalia-list.component';

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

  { path: '**', redirectTo: '' },
];
