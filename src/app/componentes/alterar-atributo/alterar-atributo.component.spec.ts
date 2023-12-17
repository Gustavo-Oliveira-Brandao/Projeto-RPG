import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAtributoComponent } from './alterar-atributo.component';

describe('AlterarAtributoComponent', () => {
  let component: AlterarAtributoComponent;
  let fixture: ComponentFixture<AlterarAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
