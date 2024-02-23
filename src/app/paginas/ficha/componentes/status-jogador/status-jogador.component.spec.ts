import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusJogadorComponent } from './status-jogador.component';

describe('StatusJogadorComponent', () => {
  let component: StatusJogadorComponent;
  let fixture: ComponentFixture<StatusJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusJogadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
