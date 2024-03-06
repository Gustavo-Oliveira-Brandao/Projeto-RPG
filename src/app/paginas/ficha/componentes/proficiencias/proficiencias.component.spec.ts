import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficienciasComponent } from './proficiencias.component';

describe('ProficienciasComponent', () => {
  let component: ProficienciasComponent;
  let fixture: ComponentFixture<ProficienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficienciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProficienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
