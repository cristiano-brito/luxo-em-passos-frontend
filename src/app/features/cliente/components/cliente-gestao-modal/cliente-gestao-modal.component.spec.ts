import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGestaoModalComponent } from './cliente-gestao-modal.component';

describe('ClienteGestaoModalComponent', () => {
  let component: ClienteGestaoModalComponent;
  let fixture: ComponentFixture<ClienteGestaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteGestaoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteGestaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
