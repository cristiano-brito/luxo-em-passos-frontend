import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Cliente } from '../../../../models/luxo.models';
import { BadgePerfilComponent } from '../../../../shared/components/badge-perfil/badge-perfil.component';
import { ButtonModule } from 'primeng/button';
import { ClienteGestaoModalComponent } from '../cliente-gestao-modal/cliente-gestao-modal.component';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  providers: [ConfirmationService, MessageService],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    BadgePerfilComponent,
    ClienteGestaoModalComponent,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.scss',
})
export class ClienteListComponent implements OnInit {
  @ViewChild('gestaoModal') gestaoModal!: ClienteGestaoModalComponent;

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.carregarClientes();
  }

  private carregarClientes() {
    this.clienteService.listarTodos().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  irParaNovoCliente() {
    this.router.navigate(['/clientes/cadastro'], { replaceUrl: true });
  }

  abrirEdicao(cliente: Cliente) {
    this.gestaoModal.abrirParaEdicao(cliente);
  }

  abrirVisualizacao(cliente: Cliente) {
    this.gestaoModal.abrirParaVisualizacao(cliente);
  }

  confirmarExclusao(id: number) {
    this.confirmationService.confirm({
      message:
        'Esta ação não pode ser desfeita. Deseja realmente remover este membro VIP?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, Excluir',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'p-button-text p-button-secondary',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.executarExclusao(id);
      },
    });
  }

  private executarExclusao(id: number) {
    this.clienteService.excluir(id).subscribe(() => {
      this.carregarClientes();
      this.messageService.add({
        severity: 'info',
        summary: 'Removido',
        detail: 'O registro do cliente foi excluído.',
      });
    });
  }

  getSeverity(perfil: string): any {
    switch (perfil) {
      case 'BLACK':
        return 'contrast';
      case 'GOLD':
        return 'warning';
      default:
        return 'info';
    }
  }
}
