import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hub',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-hub.component.html',
  styleUrl: './home-hub.component.scss'
})
export class HomeHubComponent {

  // O Router precisa ser injetado no construtor
  constructor(private router: Router) {}

  atalhos = [
    {
      label: 'Clientes VIP',
      icon: 'pi pi-users',
      desc: 'Gestão de membros e perfis de fidelidade',
      rota: '/clientes',
      color: '#b19470'
    },
    {
      label: 'Inventário',
      icon: 'pi pi-box',
      desc: 'Controle de estoque de sandálias de luxo',
      rota: '/sandalias',
      color: '#2c2c2c'
    },
    {
      label: 'Novas Vendas',
      icon: 'pi pi-shopping-cart',
      desc: 'Registrar saída de produtos e faturamento',
      rota: '/vendas',
      color: '#4a4a4a'
    },
    {
      label: 'Relatórios',
      icon: 'pi pi-chart-line',
      desc: 'Análise de performance e ticket médio',
      rota: '/relatorios',
      color: '#8e8e8e'
    }
  ];

  navegar(rota: string) {
    this.router.navigate([rota]);
  }
}
