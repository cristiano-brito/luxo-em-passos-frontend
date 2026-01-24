import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandaliaListComponent } from './sandalia-list.component';

describe('SandaliaListComponent', () => {
  let component: SandaliaListComponent;
  let fixture: ComponentFixture<SandaliaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandaliaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandaliaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
