import { Routes } from '@angular/router';
import { ClienteListComponent } from './features/cliente/components/cliente-list/cliente-list.component';
import { ClienteCadastroComponent } from './features/cliente/components/cliente-cadastro/cliente-cadastro.component';

export const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/cadastro', component: ClienteCadastroComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];
