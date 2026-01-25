import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SandaliaService } from '../../services/sandalia.service';
import { Sandalia, Categoria } from '../../../../models/luxo.models';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-sandalia-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TagModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule // Adicionado para o filtro de categorias
  ],
  templateUrl: './sandalia-list.component.html',
  styleUrl: './sandalia-list.component.scss',
})
export class SandaliaListComponent implements OnInit {
  // Estado dos Filtros
  filtroTermo: string = '';
  categoriaSelecionada: string = '';

  // Opções para o Dropdown de filtro
  categoriasOptions = [
    { label: 'Todas as Categorias', value: '' },
    { label: 'Scarpin', value: 'SCARPIN' },
    { label: 'Rasteirinha', value: 'RASTEIRINHA' },
    { label: 'Salto Alto', value: 'SALTO_ALTO' },
    { label: 'Edição Limitada', value: 'EDICAO_LIMITADA' }
  ];

  // Fluxo reativo de dados
  sandalias$ = this.sandaliaService.getSandaliasFiltradas();

  // Propriedades de controle de UI
  displayEdicao: boolean = false;
  sandaliaSelecionada: Sandalia = {} as Sandalia;

  constructor(
    private sandaliaService: SandaliaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.aoFiltrar();
  }

  aoFiltrar(): void {
    this.sandaliaService.filtrar(this.filtroTermo, this.categoriaSelecionada);
  }

  getSeverity(estoque: number): 'success' | 'warning' | 'danger' | undefined {
    if (estoque > 10) return 'success';
    if (estoque > 0) return 'warning';
    return 'danger';
  }

  getTagClass(categoria: Categoria): string {
    switch (categoria) {
      case 'EDICAO_LIMITADA': return 'tag-black';
      case 'SCARPIN': return 'tag-gold';
      default: return 'tag-standard';
    }
  }

  abrirEdicao(sandalia: Sandalia) {
    this.sandaliaSelecionada = { ...sandalia };
    this.displayEdicao = true;
  }

  salvarEdicao() {
    this.sandaliaService.atualizar(this.sandaliaSelecionada).subscribe((sucesso) => {
      if (sucesso) {
        this.messageService.add({
          severity: 'success',
          summary: 'Atualizado',
          detail: 'Peça atualizada no acervo'
        });
        this.displayEdicao = false;
        this.aoFiltrar(); // Atualiza a lista respeitando os filtros ativos
      }
    });
  }

  confirmarExclusao(sandalia: Sandalia) {
    this.confirmationService.confirm({
      message: `Deseja realmente remover o modelo ${sandalia.modelo} do inventário?`,
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sandaliaService.excluir(sandalia.sku).subscribe((sucesso) => {
          if (sucesso) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Sandália removida do acervo',
            });
            this.aoFiltrar(); // Atualiza a lista reativa
          }
        });
      },
    });
  }
}
