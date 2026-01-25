import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-relatorio-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ChartModule,
    SelectButtonModule,
  ],
  templateUrl: './relatorio-dashboard.component.html',
  styleUrl: './relatorio-dashboard.component.scss',
})
export class RelatorioDashboardComponent implements OnInit {
  // Indicadores de performance
  kpis: any = {
    faturamento: 0,
    ticketMedio: 0,
    totalVendas: 0,
    totalCanceladas: 0,
    periodoAtivo: 'TOTAL',
  };

  // Configurações do Gráfico
  pieData: any;
  pieOptions: any;

  // Configurações do Filtro
  periodoSelecionado: 'HOJE' | 'MES' | 'TOTAL' = 'TOTAL';
  opcoesPeriodo = [
    { label: 'Hoje', value: 'HOJE' },
    { label: 'Este Mês', value: 'MES' },
    { label: 'Total', value: 'TOTAL' },
  ];

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarDadosDashboard();
  }

  /**
   * Inscrição reativa aos dados do LuxoService.
   * O combineLatest no service garante que qualquer troca de filtro
   * ou nova venda atualize este componente automaticamente.
   */
  private carregarDadosDashboard(): void {
    this.relatorioService.obterEstatisticasDashboard().subscribe({
      next: (dados) => {
        this.kpis = dados;
        this.configurarGrafico(dados.distribuicao);
      },
      error: (err) => console.error('Erro ao carregar dashboard:', err),
    });
  }

  /**
   * Dispara a mudança de filtro para o motor do LuxoService
   */
  alterarFiltro(): void {
    this.relatorioService.atualizarFiltro(this.periodoSelecionado);
  }

  /**
   * Define a estética do gráfico de rosca (Doughnut)
   */
  configurarGrafico(dist: any) {
    const cores = ['#F2C80F', '#5F6B6D', '#325E6A', '#252423'];

    this.pieData = {
      labels: ['SCARPIN', 'RASTEIRINHA', 'SALTO ALTO', 'EDIÇÃO LIMITADA'],
      datasets: [
        {
          data: [
            dist.SCARPIN || 0,
            dist.RASTEIRINHA || 0,
            dist.SALTO_ALTO || 0,
            dist.EDICAO_LIMITADA || 0,
          ],
          backgroundColor: cores,
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverBackgroundColor: cores.map((c) => this.shadyColor(c, -20)), // Escurece no hover
          hoverOffset: 10,
        },
      ],
    };

    this.pieOptions = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 25,
            color: '#252423', // Cor do texto do Power BI
            font: {
              family: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              size: 12,
              weight: '600',
            },
          },
        },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#252423',
          bodyColor: '#252423',
          borderColor: '#EAEAEA',
          borderWidth: 1,
          padding: 10,
          boxPadding: 5,
          bodyFont: { size: 14 },
        },
      },
      maintainAspectRatio: false,
    };
  }

  // Helper opcional para escurecer as cores no hover
  private shadyColor(color: string, percent: number) {
    const f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff;
    return (
      '#' +
      (
        0x1000000 +
        (Math.round((t - R) * (p / 100)) + R) * 0x10000 +
        (Math.round((t - G) * (p / 100)) + G) * 0x100 +
        (Math.round((t - B) * (p / 100)) + B)
      )
        .toString(16)
        .slice(1)
    );
  }
}
