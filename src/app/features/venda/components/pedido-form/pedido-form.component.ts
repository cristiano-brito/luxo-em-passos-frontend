import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LuxoService } from '../../../../services/luxo.service';
import { Cliente, ItemPedido, Sandalia } from '../../../../models/luxo.models';
import { VendaService } from '../../services/venda.service';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DropdownModule,
    AutoCompleteModule,
    TableModule,
    InputNumberModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './pedido-form.component.html',
  styleUrl: './pedido-form.component.scss'
})
export class PedidoFormComponent implements OnInit {
  pedidoForm!: FormGroup;
  clientesFiltrados: Cliente[] = [];
  sandaliasDisponiveis: Sandalia[] = [];
  allClientes: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private luxoService: LuxoService,
    private vendaService: VendaService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.carregarDadosIniciais();
  }

  private initForm(): void {
    this.pedidoForm = this.fb.group({
      cliente: [null, Validators.required],
      itens: this.fb.array([]), // Inicia carrinho vazio
      valorTotal: [{ value: 0, disabled: true }]
    });
  }

  private carregarDadosIniciais(): void {
    this.luxoService.getClientes().subscribe(res => this.allClientes = res);
    this.luxoService.getSandalias().subscribe(res => this.sandaliasDisponiveis = res);
  }

  // Busca Reativa de Clientes VIP
  filtrarClientes(event: any): void {
    const query = event.query.toLowerCase();
    this.clientesFiltrados = this.allClientes.filter(c =>
      c.nome.toLowerCase().includes(query)
    );
  }

  // Getters para o FormArray
  get itens(): FormArray {
    return this.pedidoForm.get('itens') as FormArray;
  }

  adicionarItem(sandalia: Sandalia): void {
    const itemExistente = this.itens.controls.find(c => c.value.sandalia.sku === sandalia.sku);
    const qtdAtual = itemExistente ? itemExistente.get('quantidade')?.value : 0;

    // Bloqueio preventivo
    if (qtdAtual >= sandalia.estoque) {
      this.messageService.add({
        severity: 'error',
        summary: 'Estoque Insuficiente',
        detail: `Apenas ${sandalia.estoque} unidades disponíveis de ${sandalia.modelo}.`
      });
      return;
    }

    if (itemExistente) {
      itemExistente.get('quantidade')?.setValue(qtdAtual + 1);
    } else {
      this.itens.push(this.fb.group({
        sandalia: [sandalia],
        quantidade: [1, [Validators.required, Validators.min(1), Validators.max(sandalia.estoque)]], // Adicionado Max
        precoVendaNoAto: [sandalia.precoVenda]
      }));
    }
    this.calcularTotal();
  }

  removerItem(index: number): void {
    this.itens.removeAt(index);
    this.calcularTotal();
  }

  calcularTotal(): void {
    const total = this.itens.controls.reduce((acc, control) => {
      return acc + (control.get('precoVendaNoAto')?.value * control.get('quantidade')?.value);
    }, 0);
    this.pedidoForm.get('valorTotal')?.setValue(total);
  }

  finalizarVenda(): void {
    if (this.pedidoForm.invalid || this.itens.length === 0) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Selecione um cliente e ao menos um item.' });
      return;
    }

    const { cliente } = this.pedidoForm.value;
    const itens: ItemPedido[] = this.itens.value;

    this.vendaService.finalizarVenda(cliente, itens).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pedido VIP finalizado com sucesso!' });
    });
  }

  resetarFormulario(): void {
    this.initForm();
    this.messageService.add({
      severity: 'info',
      summary: 'Novo Pedido',
      detail: 'O formulário foi limpo para uma nova venda.'
    });
  }

}
