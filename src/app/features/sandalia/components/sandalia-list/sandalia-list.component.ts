import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandaliaService } from '../../services/sandalia.service';
import { Sandalia, Categoria } from '../../../../models/luxo.models';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sandalia-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TagModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    FormsModule
  ],
  templateUrl: './sandalia-list.component.html',
  styleUrl: './sandalia-list.component.scss',
})
export class SandaliaListComponent implements OnInit {
  sandalias: Sandalia[] = [];
  displayEdicao: boolean = false;
  sandaliaSelecionada: Sandalia = {} as Sandalia;

  constructor(
  private sandaliaService: SandaliaService,
  private confirmationService: ConfirmationService,
  private messageService: MessageService
) {}

  ngOnInit(): void {
    this.carregarSandalias();
  }

  carregarSandalias(): void {
    this.sandaliaService.getSandalias().subscribe((dados) => {
      this.sandalias = dados;
    });
  }

  // Define a cor do badge de estoque (PrimeNG padrão)
  getSeverity(
    estoque: number,
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    if (estoque > 10) return 'success';
    if (estoque > 0) return 'warning';
    return 'danger';
  }

  // Aplica as suas classes metálicas personalizadas
  getTagClass(categoria: Categoria): string {
    switch (categoria) {
      case 'EDICAO_LIMITADA':
        return 'tag-black';
      case 'SCARPIN':
        return 'tag-gold';
      default:
        return 'tag-standard';
    }
  }

  abrirEdicao(sandalia: Sandalia) {
    // Criamos uma cópia para não alterar a lista original antes de salvar
    this.sandaliaSelecionada = { ...sandalia };
    this.displayEdicao = true;
  }

  salvarEdicao() {
    this.sandaliaService.atualizar(this.sandaliaSelecionada).subscribe((sucesso) => {
      if (sucesso) {
        this.messageService.add({ severity: 'success', summary: 'Atualizado', detail: 'Peça atualizada no acervo' });
        this.displayEdicao = false;
        this.carregarSandalias();
      }
    });
  }


  confirmarExclusao(sandalia: Sandalia) {
    this.confirmationService.confirm({
      message: `Deseja realmente remover o modelo ${sandalia.modelo} do inventário?`,
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Ajustado para usar o sku e o serviço correto
        this.sandaliaService.excluir(sandalia.sku).subscribe((sucesso) => {
          if (sucesso) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Sandália removida do acervo',
            });
            this.carregarSandalias(); // Recarrega a vitrine
          }
        });
      },
    });
  }

}
