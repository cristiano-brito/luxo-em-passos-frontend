import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { VendaService } from '../../services/venda.service';
import { Pedido } from '../../../../models/luxo.models';
import { LuxoService } from '../../../../services/luxo.service';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-venda-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    TagModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './venda-list.component.html',
  styleUrl: './venda-list.component.scss'
})
export class VendaListComponent implements OnInit {
  vendas: Pedido[] = [];

  constructor(
    private luxoService: LuxoService,
    private vendaService: VendaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Escuta o "banco de dados" reativo
    this.luxoService.vendas$.subscribe(dados => {
      this.vendas = dados;
    });
  }

  confirmarCancelamento(pedido: Pedido): void {
    this.confirmationService.confirm({
      message: `Deseja realmente cancelar o pedido ${pedido.protocolo}? O estoque será estornado para os itens selecionados.`,
      header: 'Confirmar Estorno VIP',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, Cancelar',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-secondary',
      accept: () => {
        this.cancelar(pedido.protocolo);
      }
    });
  }

  private cancelar(protocolo: string): void {
    this.vendaService.cancelarVenda(protocolo).subscribe(sucesso => {
      if (sucesso) {
        this.messageService.add({
          severity: 'success',
          summary: 'Cancelado',
          detail: 'Venda cancelada e estoque atualizado.'
        });
      }
    });
  }

  getSeverity(status: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    switch (status) {
      case 'FINALIZADO':
        return 'success';
      case 'CANCELADO':
        return 'danger';
      default:
        return 'info';
    }
  }
}
