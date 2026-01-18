import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { LuxoService } from '../../../../services/luxo.service';
import { Cliente } from '../../../../models/luxo.models';
import { BadgePerfilComponent } from '../../../../shared/components/badge-perfil/badge-perfil.component';
import { ButtonModule } from 'primeng/button';
import { ClienteGestaoModalComponent } from '../cliente-gestao-modal/cliente-gestao-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    BadgePerfilComponent,
    ClienteGestaoModalComponent
  ],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.scss',
})
export class ClienteListComponent implements OnInit {
  @ViewChild('gestaoModal') gestaoModal!: ClienteGestaoModalComponent;

  clientes: Cliente[] = [];

  constructor(
    private luxoService: LuxoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarClientes();
  }

  private carregarClientes() {
    this.luxoService.getClientes().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  irParaNovoCliente() {
    this.router.navigate(['/clientes/cadastro']);
    console.log('/clientes/cadastro');
  }

  // Funções que conversam com o Modal
  abrirEdicao(cliente: Cliente) {
    this.gestaoModal.abrirParaEdicao(cliente);
  }

  abrirVisualizacao(cliente: Cliente) {
    this.gestaoModal.abrirParaVisualizacao(cliente);
  }

  getSeverity(perfil: string): any {
    switch (perfil) {
      case 'BLACK':
        return 'contrast'; // Vermelho/Escuro
      case 'GOLD':
        return 'warning'; // Amarelo/Dourado
      default:
        return 'info'; // Azul/Standard
    }
  }

}
