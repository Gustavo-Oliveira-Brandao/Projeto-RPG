import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [FormsModule, CabecalhoComponent],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css',
})
export class FichaComponent {
  forca = {
    id: 'forca',
    atributo: 10,
    modificadorForca: 0,
  };
  destreza = {
    id: 'destreza',
    atributo: 10,
    modificadorDestreza: 0,
  };

  constituicao = {
    id: 'constituicao',
    atributo: 10,
    modificadorConstituicao: 0,
  };
  inteligencia = {
    id: 'inteligencia',
    atributo: 10,
    modificadorInteligencia: 0,
  };

  sabedoria = {
    id: 'sabedoria',
    atributo: 10,
    modificadorSabedoria: 0,
  };

  carisma = {
    id: 'carisma',
    atributo: 10,
    modificadorCarisma: 0,
  };

  acrobacia = {
    id: 'acrobacia',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  arcanismo = {
    id: 'arcanismo',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  atletismo = {
    id: 'atletismo',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  cavalgar = {
    id: 'cavalgar',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  conhecimento = {
    id: 'conhecimento',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  conhecimento2 = {
    id: 'conhecimento2',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  diplomacia = {
    id: 'diplomacia',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  enganacao = {
    id: 'enganacao',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  fortitude = {
    id: 'fortitude',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  furtividade = {
    id: 'furtividade',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  iniciativa = {
    id: 'iniciativa',
    atributo: 0,
    grau: 'D',
  };

  intimidacao = {
    id: 'intimidacao',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  ladroagem = {
    id: 'ladroagem',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  manufatura = {
    id: 'manufatura',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  medicina = {
    id: 'medicina',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  natureza = {
    id: 'natureza',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  ocultismo = {
    id: 'ocultismo',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  percepcao = {
    id: 'percepcao',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  perfomance = {
    id: 'perfomance',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  reflexos = {
    id: 'reflexos',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  religiao = {
    id: 'religiao',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  sobrevivencia = {
    id: 'sobrevivencia',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  sociedade = {
    id: 'sociedade',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  velocidade = {
    id: 'velocidade',
    atributo: 0,
  };

  vontade = {
    id: 'vontade',
    atributo: 0,
    grau: 'D',
    valorGrau: 0,
  };

  vidaMax = {
    id: 'pvMax',
    atributo: 0,
  };

  vidaAtual = {
    id: 'pvAtual',
    atributo: 0,
  };

  ca = {
    id: 'classeArmadura',
    atributo: 10,
  };

  atualizarAtributos() {
    this.forca.modificadorForca = Math.trunc((this.forca.atributo - 10) / 2);
    this.destreza.modificadorDestreza = Math.trunc(
      (this.destreza.atributo - 10) / 2
    );
    this.constituicao.modificadorConstituicao = Math.trunc(
      (this.constituicao.atributo - 10) / 2
    );
    this.inteligencia.modificadorInteligencia = Math.trunc(
      (this.inteligencia.atributo - 10) / 2
    );
    this.sabedoria.modificadorSabedoria = Math.trunc(
      (this.sabedoria.atributo - 10) / 2
    );
    this.carisma.modificadorCarisma = Math.trunc(
      (this.carisma.atributo - 10) / 2
    );

    this.acrobacia.atributo =
      this.destreza.modificadorDestreza + this.acrobacia.valorGrau;
    this.arcanismo.atributo =
      this.inteligencia.modificadorInteligencia + this.arcanismo.valorGrau;
    this.atletismo.atributo =
      this.forca.modificadorForca + this.atletismo.valorGrau;
    this.cavalgar.atributo =
      this.destreza.modificadorDestreza + this.cavalgar.valorGrau;
    this.diplomacia.atributo =
      this.carisma.modificadorCarisma + this.diplomacia.valorGrau;
    this.enganacao.atributo =
      this.carisma.modificadorCarisma + this.enganacao.valorGrau;
    this.fortitude.atributo =
      this.constituicao.modificadorConstituicao + this.fortitude.valorGrau;
    this.furtividade.atributo =
      this.destreza.modificadorDestreza + this.furtividade.valorGrau;
    this.intimidacao.atributo =
      this.carisma.modificadorCarisma + this.intimidacao.valorGrau;
    this.ladroagem.atributo =
      this.destreza.modificadorDestreza + this.ladroagem.valorGrau;
    this.manufatura.atributo =
      this.inteligencia.modificadorInteligencia + this.manufatura.valorGrau;
    this.medicina.atributo =
      this.sabedoria.modificadorSabedoria + this.medicina.valorGrau;
    this.natureza.atributo =
      this.sabedoria.modificadorSabedoria + this.natureza.valorGrau;
    this.ocultismo.atributo =
      this.inteligencia.modificadorInteligencia + this.ocultismo.valorGrau;
    this.percepcao.atributo =
      this.sabedoria.modificadorSabedoria + this.percepcao.valorGrau;
    this.perfomance.atributo =
      this.carisma.modificadorCarisma + this.perfomance.valorGrau;
    this.reflexos.atributo =
      this.destreza.modificadorDestreza + this.reflexos.valorGrau;
    this.religiao.atributo =
      this.sabedoria.modificadorSabedoria + this.religiao.valorGrau;
    this.sociedade.atributo =
      this.inteligencia.modificadorInteligencia + this.sociedade.valorGrau;
    this.sobrevivencia.atributo =
      this.sabedoria.modificadorSabedoria + this.sobrevivencia.valorGrau;
    this.vontade.atributo =
      this.sabedoria.modificadorSabedoria + this.vontade.valorGrau;
  }

  selectedValue?: string;

  onSelect(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
  }

  grauTreinamento(x: string) {
    let valor = 0;
    if (x === 'destreinado') {
      valor = 0;
    } else if (x === 'treinado') {
      valor = 2;
    } else if (x === 'especialista') {
      valor = 4;
    } else if (x === 'mestre') {
      valor = 6;
    } else if (x === 'lendario') {
      valor = 8;
    }
    return valor;
  }

  acrobaciaTreinamento() {
    this.acrobacia.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.acrobacia.grau);
    this.acrobacia.valorGrau = valor;
  }

  atletismoTreinamento() {
    this.atletismo.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.atletismo.grau);
    this.atletismo.valorGrau = valor;
    console.log(this.selectedValue);
    console.log(this.atletismo.valorGrau);
  }

  arcanismoTreinamento() {
    this.arcanismo.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.arcanismo.grau);
    this.arcanismo.valorGrau = valor;
  }

  cavalgarTreinamento() {
    this.cavalgar.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.cavalgar.grau);
    this.cavalgar.valorGrau = valor;
  }

  diplomaciaTreinamento() {
    this.diplomacia.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.diplomacia.grau);
    this.diplomacia.valorGrau = valor;
  }

  enganacaoTreinamento() {
    this.enganacao.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.enganacao.grau);
    this.enganacao.valorGrau = valor;
  }

  fortitudeTreinamento() {
    this.fortitude.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.fortitude.grau);
    this.fortitude.valorGrau = valor;
  }

  furtividadeTreinamento() {
    this.furtividade.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.furtividade.grau);
    this.furtividade.valorGrau = valor;
  }

  intimidacaoTreinamento() {
    this.intimidacao.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.intimidacao.grau);
    this.intimidacao.valorGrau = valor;
  }

  ladroagemTreinamento() {
    this.ladroagem.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.ladroagem.grau);
    this.ladroagem.valorGrau = valor;
  }

  manufaturaTreinamento() {
    this.manufatura.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.manufatura.grau);
    this.manufatura.valorGrau = valor;
  }

  medicinaTreinamento() {
    this.medicina.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.medicina.grau);
    this.medicina.valorGrau = valor;
  }

  naturezaTreinamento() {
    this.natureza.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.natureza.grau);
    this.natureza.valorGrau = valor;
  }

  ocultismoTreinamento() {
    this.ocultismo.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.ocultismo.grau);
    this.ocultismo.valorGrau = valor;
  }

  percepcaoTreinamento() {
    this.percepcao.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.percepcao.grau);
    this.percepcao.valorGrau = valor;
  }

  perfomanceTreinamento() {
    this.perfomance.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.perfomance.grau);
    this.perfomance.valorGrau = valor;
  }

  reflexosTreinamento() {
    this.reflexos.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.reflexos.grau);
    this.reflexos.valorGrau = valor;
  }

  religiaoTreinamento() {
    this.religiao.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.religiao.grau);
    this.religiao.valorGrau = valor;
  }

  saberTreinamento() {
    this.conhecimento.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.conhecimento.grau);
    this.conhecimento.valorGrau = valor;
  }

  saber2Treinamento() {
    this.conhecimento2.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.conhecimento2.grau);
    this.conhecimento2.valorGrau = valor;
  }

  sociedadeTreinamento() {
    this.sociedade.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.sociedade.grau);
    this.sociedade.valorGrau = valor;
  }

  sobrevivenciaTreinamento() {
    this.sobrevivencia.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.sobrevivencia.grau);
    this.sobrevivencia.valorGrau = valor;
  }

  vontadeTreinamento() {
    this.vontade.grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.vontade.grau);
    this.vontade.valorGrau = valor;
  }
}
