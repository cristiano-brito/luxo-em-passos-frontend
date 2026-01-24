import { Component, OnInit } from '@angular/core'; // Adicionado OnInit
import { CommonModule } from '@angular/common';
import { SandaliaService } from '../../services/sandalia.service';
import { Sandalia, Categoria } from '../../../../models/luxo.models';

// Imports do PrimeNG para o visual de Boutique
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-sandalia-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TagModule,
    TooltipModule
  ],
  templateUrl: './sandalia-list.component.html',
  styleUrl: './sandalia-list.component.scss',
})
export class SandaliaListComponent implements OnInit {
  sandalias: Sandalia[] = [];

  constructor(private sandaliaService: SandaliaService) {}

  ngOnInit(): void {
    this.sandaliaService.getSandalias().subscribe((dados) => {
      this.sandalias = dados;
    });
  }

  // Define a cor do badge de estoque (PrimeNG padrão)
  getSeverity(estoque: number): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
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
}
