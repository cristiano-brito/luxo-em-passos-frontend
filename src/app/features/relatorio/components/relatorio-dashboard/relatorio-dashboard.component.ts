import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-relatorio-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule],
  templateUrl: './relatorio-dashboard.component.html',
  styleUrl: './relatorio-dashboard.component.scss'
})
export class RelatorioDashboardComponent implements OnInit {

  kpis: any = { faturamento: 0, ticketMedio: 0, totalVendas: 0, totalCanceladas: 0 };
  pieData: any;
  pieOptions: any;

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarDadosDashboard();
  }

  private carregarDadosDashboard(): void {
    this.relatorioService.obterEstatisticasDashboard().subscribe({
      next: (dados) => {
        this.kpis = dados;
        this.configurarGrafico(dados.distribuicao);
      },
      error: (err) => console.error('Erro ao carregar dashboard:', err)
    });
  }

  configurarGrafico(dist: any) {
    // Cores luxuosas: Preto, Dourado, Cinza Escuro e Dourado Claro
    const cores = ['#1A1A1A', '#B38728', '#4A4A4A', '#D4AF37'];

    this.pieData = {
      labels: ['SCARPIN', 'RASTEIRINHA', 'SALTO ALTO', 'EDIÇÃO LIMITADA'],
      datasets: [
        {
          data: [dist.SCARPIN, dist.RASTEIRINHA, dist.SALTO_ALTO, dist.EDICAO_LIMITADA],
          backgroundColor: cores,
          hoverBackgroundColor: cores.map(c => c + 'CC') // Adiciona transparência no hover
        }
      ]
    };

    this.pieOptions = {
      cutout: '70%', // Transforma em Doughnut (Rosca)
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: '#666',
            font: { family: 'Montserrat, sans-serif', size: 12 }
          }
        }
      },
      maintainAspectRatio: false
    };
  }
}
