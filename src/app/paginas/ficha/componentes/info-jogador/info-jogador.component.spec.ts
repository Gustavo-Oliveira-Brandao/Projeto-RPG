import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJogadorComponent } from './info-jogador.component';

describe('InfoJogadorComponent', () => {
  let component: InfoJogadorComponent;
  let fixture: ComponentFixture<InfoJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoJogadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
