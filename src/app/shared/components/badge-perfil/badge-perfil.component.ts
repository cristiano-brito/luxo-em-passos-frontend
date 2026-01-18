import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-perfil',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="'tag-premium ' + getTagClass()">
      {{ perfil }}
    </span>
  `
})
export class BadgePerfilComponent {
  @Input() perfil: string = 'STANDARD';

  getTagClass(): string {
    const p = this.perfil?.toUpperCase();
    if (p === 'BLACK') return 'tag-black';
    if (p === 'GOLD') return 'tag-gold';
    return 'tag-standard';
  }
}
