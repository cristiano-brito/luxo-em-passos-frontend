import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SandaliaService } from '../../services/sandalia.service';
import { Sandalia, Categoria } from '../../../../models/luxo.models';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sandalia-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, InputNumberModule, DropdownModule, ButtonModule, DialogModule, ToastModule],
  providers: [MessageService],
  templateUrl: './sandalia-form.component.html',
  styleUrl: './sandalia-form.component.scss'
})
export class SandaliaFormComponent implements OnInit {

  isEdicao: boolean = false;

  sandalia: Sandalia = {
    sku: '', modelo: '', tamanho: 36, categoria: 'SCARPIN' as Categoria,
    precoCusto: 0, precoVenda: 0, estoque: 0, imageUrl: ''
  };

  displayNovaCategoria: boolean = false;
  novaCategoriaNome: string = '';

  categorias = [
    { label: 'Scarpin', value: 'SCARPIN' },
    { label: 'Rasteirinha', value: 'RASTEIRINHA' },
    { label: 'Salto Alto', value: 'SALTO_ALTO' },
    { label: 'Edição Limitada', value: 'EDICAO_LIMITADA' }
  ];

  constructor(
    private sandaliaService: SandaliaService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const sku = this.route.snapshot.paramMap.get('sku');

    if (sku) {
      this.isEdicao = true;
      this.sandaliaService.getSandalias().subscribe(lista => {
        const itemEncontrado = lista.find(s => s.sku === sku);
        if (itemEncontrado) {
          this.sandalia = { ...itemEncontrado };
        }
      });
    }
  }

  adicionarCategoria() {
    if (this.novaCategoriaNome) {
      const valorFormatado = this.novaCategoriaNome.toUpperCase().replace(/ /g, '_');
      this.categorias.push({ label: this.novaCategoriaNome, value: valorFormatado });
      this.sandalia.categoria = valorFormatado as Categoria;
      this.displayNovaCategoria = false;
      this.novaCategoriaNome = '';
      this.messageService.add({ severity: 'info', summary: 'Categoria Criada', detail: 'Pronta para uso.' });
    }
  }

  salvar() {
    // Validação extra: impede duplicidade de SKU em novos cadastros
    if (!this.isEdicao) {
      let existente = false;
      this.sandaliaService.getSandalias().subscribe(lista => {
        existente = lista.some(s => s.sku === this.sandalia.sku);
      });

      if (existente) {
        this.messageService.add({ severity: 'error', summary: 'Erro de SKU', detail: 'Este SKU já existe no acervo.' });
        return;
      }
    }

    const acao = this.isEdicao
      ? this.sandaliaService.atualizar(this.sandalia)
      : this.sandaliaService.adicionar(this.sandalia);

    acao.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: this.isEdicao ? 'Alterações salvas!' : 'Sandália cadastrada!'
      });
      setTimeout(() => this.voltar(), 1000);
    });
  }

  voltar() {
    this.router.navigate(['/sandalias']);
  }
}
