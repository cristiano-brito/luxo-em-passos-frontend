import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Cliente } from '../../../../models/luxo.models';

@Component({
  selector: 'app-cliente-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.scss'
})
export class ClienteCadastroComponent {
  // Inicialização do objeto seguindo o seu Model exportado
  cliente: Cliente = {
    nome: '',
    telefone: '',
    email: '',
    perfil: 'STANDARD',
    gastoAcumulado: 0,
    dataCadastro: new Date().toISOString().split('T')[0],
    endereco: {
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  };

  perfis = [
    { label: 'BLACK MEMBER', value: 'BLACK' },
    { label: 'GOLD MEMBER', value: 'GOLD' },
    { label: 'STANDARD', value: 'STANDARD' }
  ];

  constructor(private router: Router) {}

  confirmarInscricao() {
    console.log('Cliente pronto para persistência local:', this.cliente);
    // this.luxoService.adicionarCliente(this.cliente).subscribe(() => {
    //   this.voltarParaLista();
    // });
    this.voltarParaLista();
  }

  voltarParaLista() {
    this.router.navigate(['/clientes']);
  }
}
