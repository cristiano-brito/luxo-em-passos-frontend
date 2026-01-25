import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandaliaFormComponent } from './sandalia-form.component';

describe('SandaliaFormComponent', () => {
  let component: SandaliaFormComponent;
  let fixture: ComponentFixture<SandaliaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandaliaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandaliaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
