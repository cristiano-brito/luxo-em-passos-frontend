import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Cliente } from '../../../../models/luxo.models';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-gestao-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule
  ],
  templateUrl: './cliente-gestao-modal.component.html',
  styleUrl: './cliente-gestao-modal.component.scss'
})
export class ClienteGestaoModalComponent {
  @Output() salvou = new EventEmitter<void>();

  display: boolean = false;
  modalTitle: string = '';
  isReadOnly: boolean = false;

  // Inicialização completa para satisfazer a interface Cliente
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    perfil: 'STANDARD',
    gastoTotalAcumulado: 0,
    endereco: {
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  };

  perfis = [
    { label: 'BLACK', value: 'BLACK' },
    { label: 'GOLD', value: 'GOLD' },
    { label: 'STANDARD', value: 'STANDARD' }
  ];

  constructor(private clienteService: ClienteService) {}

  abrirParaEdicao(clienteParaEditar: Cliente) {
    this.modalTitle = 'EDIT PROFILE';
    this.isReadOnly = false;
    this.cliente = JSON.parse(JSON.stringify(clienteParaEditar)); // Deep clone para segurança
    this.display = true;
  }

  abrirParaVisualizacao(clienteParaConsultar: Cliente) {
    this.modalTitle = 'CLIENT INSIGHTS';
    this.isReadOnly = true;
    this.cliente = { ...clienteParaConsultar };
    this.display = true;
  }

  fecharModal() {
    this.display = false;
  }

  confirmarAlteracoes() {
    if (!this.isReadOnly) {
      // Chama o serviço de fato para persistir no LuxoService
      this.clienteService.atualizar(this.cliente).subscribe(sucesso => {
        if (sucesso) {
          this.salvou.emit(); // Avisa o ClienteListComponent (pai) que deu certo
          this.fecharModal();
        }
      });
    }
  }
}
