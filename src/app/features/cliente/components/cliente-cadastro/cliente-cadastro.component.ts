import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Cliente } from '../../../../models/luxo.models';
import { MessageService } from 'primeng/api';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  standalone: true,
  providers:[MessageService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    ToastModule
  ],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.scss'
})
export class ClienteCadastroComponent {
  // Inicialização do objeto seguindo o seu Model exportado
  clienteInicial: Cliente = {
    nome: '',
    telefone: '',
    email: '',
    perfil: 'STANDARD',
    gastoTotalAcumulado: 0,
    dataCadastro: new Date().toISOString().split('T')[0],
    endereco: {
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  };

  cliente: Cliente = { ...this.clienteInicial };

  perfis = [
    { label: 'BLACK MEMBER', value: 'BLACK' },
    { label: 'GOLD MEMBER', value: 'GOLD' },
    { label: 'STANDARD', value: 'STANDARD' }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private clienteService: ClienteService
  ) {}

  confirmarInscricao() {
    // Simulando a chamada ao service que você fará no futuro
    this.clienteService.adicionar(this.cliente).subscribe({
      next: (res) => {
        // 1. Mostra o aviso de sucesso
        this.messageService.add({
          severity: 'success',
          summary: 'Inscrição Realizada',
          detail: `${this.cliente.nome} agora é um membro VIP.`,
          life: 3000
        });

        // 2. Reseta o formulário para o próximo cadastro
        this.limparFormulario();
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível salvar o cliente.' });
      }
    });
  }

  limparFormulario() {
    // Reseta o objeto mantendo a estrutura
    this.cliente = {
      ...this.clienteInicial,
      endereco: { ...this.clienteInicial.endereco }
    };
  }

  voltarParaLista() {
    this.router.navigate(['/clientes']);
  }
}
