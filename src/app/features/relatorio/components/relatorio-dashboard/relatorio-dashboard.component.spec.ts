import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDashboardComponent } from './relatorio-dashboard.component';

describe('RelatorioDashboardComponent', () => {
  let component: RelatorioDashboardComponent;
  let fixture: ComponentFixture<RelatorioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
