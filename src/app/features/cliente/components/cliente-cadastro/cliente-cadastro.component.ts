import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { Cliente } from '../../../../models/luxo.models';
import { MessageService } from 'primeng/api';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  standalone: true,
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    ToastModule,
    InputMaskModule
  ],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.scss',
})
export class ClienteCadastroComponent {

  cliente: Cliente = this.criarNovoCliente();

  constructor(
    private router: Router,
    private messageService: MessageService,
    private clienteService: ClienteService,
  ) {}

  private criarNovoCliente(): Cliente {
    return {
      nome: '',
      telefone: '',
      email: '',
      perfil: 'STANDARD',
      gastoTotalAcumulado: 0,
      endereco: {
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        cep: '',
        uf: ''
      }
    };
  }

  confirmarInscricao() {
    this.clienteService.adicionar(this.cliente).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Inscrição Realizada',
          detail: `${res.nome} agora é um membro VIP.`,
          life: 3000,
        });

        this.limparFormulario();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível salvar o cliente.',
        });
      },
    });
  }

  limparFormulario() {
    this.cliente = this.criarNovoCliente();
  }

  voltarParaLista() {
    this.router.navigate(['/clientes']);
  }
}
