import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteListComponent } from './features/cliente/components/cliente-list/cliente-list.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SystemStatusService } from './core/services/system-status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClienteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LUXO EM PASSOS';
  isOnline$: Observable<boolean>;

  constructor(private statusService: SystemStatusService) {
    this.isOnline$ = this.statusService.status$;
  }
}
