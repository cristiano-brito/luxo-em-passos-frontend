import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePerfilComponent } from './badge-perfil.component';

describe('BadgePerfilComponent', () => {
  let component: BadgePerfilComponent;
  let fixture: ComponentFixture<BadgePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
