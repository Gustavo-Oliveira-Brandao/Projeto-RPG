import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonagemComponent } from './info-personagem.component';

describe('InfoPersonagemComponent', () => {
  let component: InfoPersonagemComponent;
  let fixture: ComponentFixture<InfoPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPersonagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
