import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Cliente } from '../../../../models/luxo.models';

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
  display: boolean = false;
  modalTitle: string = '';
  isReadOnly: boolean = false;

  // Inicialização completa para satisfazer a interface Cliente
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    perfil: 'STANDARD',
    gastoAcumulado: 0,
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

  // O nome agora indica que os dados serão carregados para alteração
  abrirParaEdicao(clienteParaEditar: Cliente) {
    this.modalTitle = 'EDIT PROFILE';
    this.isReadOnly = false;
    this.cliente = { ...clienteParaEditar };
    this.display = true;
  }

  // O nome indica que é apenas para leitura/consulta
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
      console.log('Dados validados e prontos para o Java:', this.cliente);
      this.fecharModal();
    }
  }
}
