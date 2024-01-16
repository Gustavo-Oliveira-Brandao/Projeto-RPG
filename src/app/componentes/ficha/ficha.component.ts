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
  atributos: {
    [key: string]: { id: string; atributo: number; modificador: number };
  } = {
    forca: {
      id: 'forca',
      atributo: 10,
      modificador: 0,
    },
    destreza: {
      id: 'destreza',
      atributo: 10,
      modificador: 0,
    },

    constituicao: {
      id: 'constituicao',
      atributo: 10,
      modificador: 0,
    },
    inteligencia: {
      id: 'inteligencia',
      atributo: 10,
      modificador: 0,
    },

    sabedoria: {
      id: 'sabedoria',
      atributo: 10,
      modificador: 0,
    },

    carisma: {
      id: 'carisma',
      atributo: 10,
      modificador: 0,
    },
  };

  pericias: {
    [key: string]: {
      id: string;
      atributo: number;
      grau: string;
      valorGrau: number;
      tipoAtributo: string;
    };
  } = {
    acrobacia: {
      id: 'acrobacia',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'destreza',
    },
    arcanismo: {
      id: 'arcanismo',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    atletismo: {
      id: 'atletismo',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'forca',
    },

    cavalgar: {
      id: 'cavalgar',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'destreza',
    },

    conhecimento: {
      id: 'conhecimento',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    conhecimento2: {
      id: 'conhecimento2',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    diplomacia: {
      id: 'diplomacia',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'carisma',
    },

    enganacao: {
      id: 'enganacao',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'carisma',
    },

    fortitude: {
      id: 'fortitude',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'constituicao',
    },

    furtividade: {
      id: 'furtividade',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'destreza',
    },

    intimidacao: {
      id: 'intimidacao',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'carisma',
    },

    ladroagem: {
      id: 'ladroagem',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'destreza',
    },

    manufatura: {
      id: 'manufatura',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    medicina: {
      id: 'medicina',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },

    natureza: {
      id: 'natureza',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },

    ocultismo: {
      id: 'ocultismo',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    percepcao: {
      id: 'percepcao',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },

    perfomance: {
      id: 'perfomance',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'carisma',
    },

    reflexos: {
      id: 'reflexos',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'destreza',
    },

    religiao: {
      id: 'religiao',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },

    sobrevivencia: {
      id: 'sobrevivencia',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },

    sociedade: {
      id: 'sociedade',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'inteligencia',
    },

    vontade: {
      id: 'vontade',
      atributo: 0,
      grau: 'D',
      valorGrau: 0,
      tipoAtributo: 'sabedoria',
    },
  };

  statusJogador = {
    vidaMax: {
      id: 'pvMax',
      atributo: 0,
    },

    vidaAtual: {
      id: 'pvAtual',
      atributo: 0,
    },

    iniciativa: {
      id: 'iniciativa',
      atributo: 0,
      tipoAtributo: 'destreza',
    },

    ca: {
      id: 'classeArmadura',
      atributo: 10,
    },

    velocidade: {
      id: 'velocidade',
      atributo: 0,
    },
  };

  dados = {
    d4: {
      id: 'd4',
      sides: 4,
    },

    d6: {
      id: 'd6',
      sides: 6,
    },

    d8: {
      id: 'd8',
      sides: 8,
    },

    d10: {
      id: 'd10',
      sides: 10,
    },

    d12: {
      id: 'd12',
      sides: 12,
    },

    d20: {
      id: 'd20',
      sides: 20,
    },

    d100: {
      id: 'd100',
      sides: 100,
    },
  };

  atualizarAtributos() {
    Object.keys(this.atributos).forEach((atributo) => {
      const modificador = Math.trunc(
        (this.atributos[atributo].atributo - 10) / 2
      );
      this.atributos[atributo].modificador = modificador;
    });
    this.atualizarPericias();
  }


  atualizarPericias() {
    Object.keys(this.pericias).forEach((pericia) => {
      let atributo = this.pericias[pericia].tipoAtributo;

      if (this.pericias[pericia].tipoAtributo === this.atributos['forca'].id) {
        this.pericias[pericia].atributo = this.atributos['forca'].modificador + this.pericias[pericia].valorGrau
      } else if (this.pericias[pericia].tipoAtributo === this.atributos['destreza'].id){
        this.pericias[pericia].atributo = this.atributos['destreza'].modificador +  this.pericias[pericia].valorGrau
      } else if (this.pericias[pericia].tipoAtributo === this.atributos['constituicao'].id){
        this.pericias[pericia].atributo = this.atributos['constituicao'].modificador + this.pericias[pericia].valorGrau
      } else if (this.pericias[pericia].tipoAtributo === this.atributos['inteligencia'].id){
        this.pericias[pericia].atributo = this.atributos['inteligencia'].modificador + this.pericias[pericia].valorGrau
      } else if (this.pericias[pericia].tipoAtributo === this.atributos['sabedoria'].id){
        this.pericias[pericia].atributo = this.atributos['sabedoria'].modificador + this.pericias[pericia].valorGrau
      } else if (this.pericias[pericia].tipoAtributo === this.atributos['carisma'].id){
        this.pericias[pericia].atributo = this.atributos['carisma'].modificador + this.pericias[pericia].valorGrau
      }
    });
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
    this.pericias['acrobacia'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['acrobacia'].grau);
    this.pericias['acrobacia'].valorGrau = valor;
    this.atualizarPericias();
  }

  atletismoTreinamento() {
    this.pericias['atletismo'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['atletismo'].grau);
    this.pericias['atletismo'].valorGrau = valor;
    this.atualizarPericias();
  }

  arcanismoTreinamento() {
    this.pericias['arcanismo'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['arcanismo'].grau);
    this.pericias['arcanismo'].valorGrau = valor;
    this.atualizarPericias();
  }

  cavalgarTreinamento() {
    this.pericias['cavalgar'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['cavalgar'].grau);
    this.pericias['cavalgar'].valorGrau = valor;
    this.atualizarPericias();
  }

  diplomaciaTreinamento() {
    this.pericias['diplomacia'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['diplomacia'].grau);
    this.pericias['diplomacia'].valorGrau = valor;
    this.atualizarPericias();
  }

  enganacaoTreinamento() {
    this.pericias['enganacao'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['enganacao'].grau);
    this.pericias['enganacao'].valorGrau = valor;
    this.atualizarPericias();
  }

  fortitudeTreinamento() {
    this.pericias['fortitude'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['fortitude'].grau);
    this.pericias['fortitude'].valorGrau = valor;
    this.atualizarPericias();
  }

  furtividadeTreinamento() {
    this.pericias['furtividade'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['furtividade'].grau);
    this.pericias['furtividade'].valorGrau = valor;
    this.atualizarPericias();
  }

  intimidacaoTreinamento() {
    this.pericias['intimidacao'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['intimidacao'].grau);
    this.pericias['intimidacao'].valorGrau = valor;
    this.atualizarPericias();
  }

  ladroagemTreinamento() {
    this.pericias['ladroagem'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['ladroagem'].grau);
    this.pericias['ladroagem'].valorGrau = valor;
    this.atualizarPericias();
  }

  manufaturaTreinamento() {
    this.pericias['manufatura'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['manufatura'].grau);
    this.pericias['manufatura'].valorGrau = valor;
    this.atualizarPericias();
  }

  medicinaTreinamento() {
    this.pericias['medicina'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['medicina'].grau);
    this.pericias['medicina'].valorGrau = valor;
    this.atualizarPericias();
  }

  naturezaTreinamento() {
    this.pericias['natureza'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['natureza'].grau);
    this.pericias['natureza'].valorGrau = valor;
    this.atualizarPericias();
  }

  ocultismoTreinamento() {
    this.pericias['ocultismo'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['ocultismo'].grau);
    this.pericias['ocultismo'].valorGrau = valor;
    this.atualizarPericias();
  }

  percepcaoTreinamento() {
    this.pericias['percepcao'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['percepcao'].grau);
    this.pericias['percepcao'].valorGrau = valor;
    this.atualizarPericias();
  }

  perfomanceTreinamento() {
    this.pericias['perfomance'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['perfomance'].grau);
    this.pericias['perfomance'].valorGrau = valor;
    this.atualizarPericias();
  }

  reflexosTreinamento() {
    this.pericias['reflexos'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['reflexos'].grau);
    this.pericias['reflexos'].valorGrau = valor;
    this.atualizarPericias();
  }

  religiaoTreinamento() {
    this.pericias['religiao'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['religiao'].grau);
    this.pericias['religiao'].valorGrau = valor;
    this.atualizarPericias();
  }

  saberTreinamento() {
    this.pericias['conhecimento'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['conhecimento'].grau);
    this.pericias['conhecimento'].valorGrau = valor;
    this.atualizarPericias();
  }

  saber2Treinamento() {
    this.pericias['conhecimento2'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['conhecimento2'].grau);
    this.pericias['conhecimento2'].valorGrau = valor;
    this.atualizarPericias();
  }

  sociedadeTreinamento() {
    this.pericias['sociedade'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['sociedade'].grau);
    this.pericias['sociedade'].valorGrau = valor;
    this.atualizarPericias();
  }

  sobrevivenciaTreinamento() {
    this.pericias['sobrevivencia'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['sobrevivencia'].grau);
    this.pericias['sobrevivencia'].valorGrau = valor;
    this.atualizarPericias();
  }

  vontadeTreinamento() {
    this.pericias['vontade'].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias['vontade'].grau);
    this.pericias['vontade'].valorGrau = valor;
    this.atualizarPericias();
  }

  rolagemD20() {
    var randomNumber = Math.floor(Math.random() * this.dados.d20.sides) + 1;
    return randomNumber;
  }

  acrobaciaRolagem() {
    let sla = this.rolagemD20();
    console.log(sla);
  }

  atletismoRolagem() {}

  arcanismoRolagem() {}

  cavalgarRolagem() {}

  diplomaciaRolagem() {}

  enganacaoRolagem() {}

  fortitudeRolagem() {}

  furtividadeRolagem() {}

  intimidacaoRolagem() {}

  ladroagemRolagem() {}

  manufaturaRolagem() {}

  medicinaRolagem() {}

  naturezaRolagem() {}

  ocultismoRolagem() {}

  percepcaoRolagem() {}

  perfomanceRolagem() {}

  reflexosRolagem() {}

  religiaoRolagem() {}

  saberRolagem() {}

  saber2Rolagem() {}

  sociedadeRolagem() {}

  sobrevivenciaRolagem() {}

  vontadeRolagem() {}
}
