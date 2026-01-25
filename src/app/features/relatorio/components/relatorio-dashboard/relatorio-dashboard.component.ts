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
  kpis: any = {
    faturamento: 0,
    ticketMedio: 0,
    totalVendas: 0,
    totalCanceladas: 0,
    periodoAtivo: 'TOTAL',
  };

  pieData: any;
  pieOptions: any;

  barData: any;
  barOptions: any;

  periodoSelecionado: 'HOJE' | 'MES' | 'TOTAL' = 'TOTAL';
  opcoesPeriodo = [
    { label: 'Hoje', value: 'HOJE' },
    { label: 'Este Mês', value: 'MES' },
    { label: 'Total', value: 'TOTAL' },
  ];

  topClientes: any[] = [];
  produtosCriticos: any[] = [];

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarDadosDashboard();
  }

  private carregarDadosDashboard(): void {
    this.relatorioService.obterEstatisticasDashboard().subscribe({
      next: (dados) => {
        this.kpis = dados;
        this.configurarGraficoPizza(dados.distribuicao);
      },
      error: (err) => console.error(err),
    });

    this.relatorioService.obterTopSpenders().subscribe(res => this.topClientes = res);

    this.relatorioService.obterEstoqueCritico().subscribe(res => this.produtosCriticos = res);

    this.relatorioService.obterFaturamentoMensal().subscribe(res => {
      this.configurarGraficoBarras(res);
    });
  }

  alterarFiltro(): void {
    this.relatorioService.atualizarFiltro(this.periodoSelecionado);
  }

  private configurarGraficoPizza(dist: any) {
    const cores = ['#325E6A', '#C08457', '#82937E', '#5F6B6D'];

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
          hoverBackgroundColor: cores.map((c) => this.shadyColor(c, -20)),
          hoverOffset: 15,
        },
      ],
    };

    this.pieOptions = {
      cutout: '75%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 25,
            color: '#252423',
            font: { family: "'Segoe UI', sans-serif", size: 12, weight: '600' },
          },
        },
      },
      maintainAspectRatio: false,
    };
  }

  private configurarGraficoBarras(res: any) {
    this.barData = {
      labels: res.labels,
      datasets: [
        {
          label: 'Faturamento',
          backgroundColor: '#325E6A',
          hoverBackgroundColor: '#C08457',
          data: res.values,
          borderRadius: 8
        }
      ]
    };

    this.barOptions = {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#999' } },
        y: { grid: { color: '#f0f0f0' }, ticks: { color: '#999' } }
      },
      maintainAspectRatio: false
    };
  }

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
