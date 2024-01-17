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

  personagem = {
    nome: {
      id: '',
    },
    raca:{
      id: ''
    },
    classe:{
      id: ''
    },
    nivel:{
      atributo: 1
    }

    }


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

  ataques: Array<{
    nome: string;
    tipoAtributo: string;
    quantidadeDados: number;
    dadoDano: number;
  }> = Array(

  );


  adicionarAtaque(
    nome: string,
    tipoAtributo: string,
    quantidadeDados: number,
    dadoDano: number
  ) {
    if (this.atributos[tipoAtributo].id === 'destreza') {
      this.ataques.push({nome, tipoAtributo, quantidadeDados, dadoDano});

      const para = document.createElement("button")
      para.setAttribute('class', 'ataque')

      const node = document.createTextNode(nome)
      para.appendChild(node)

      const element = document.getElementById('ataques')
      element?.appendChild(para)
    }
  }


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
      if (this.pericias[pericia].tipoAtributo === this.atributos['forca'].id) {
        this.pericias[pericia].atributo =
          this.atributos['forca'].modificador +
          this.pericias[pericia].valorGrau;
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['destreza'].id
      ) {
        this.pericias[pericia].atributo =
          this.atributos['destreza'].modificador +
          this.pericias[pericia].valorGrau;
      } else if (
        this.pericias[pericia].tipoAtributo ===
        this.atributos['constituicao'].id
      ) {
        this.pericias[pericia].atributo =
          this.atributos['constituicao'].modificador +
          this.pericias[pericia].valorGrau;
      } else if (
        this.pericias[pericia].tipoAtributo ===
        this.atributos['inteligencia'].id
      ) {
        this.pericias[pericia].atributo =
          this.atributos['inteligencia'].modificador +
          this.pericias[pericia].valorGrau;
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['sabedoria'].id
      ) {
        this.pericias[pericia].atributo =
          this.atributos['sabedoria'].modificador +
          this.pericias[pericia].valorGrau;
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['carisma'].id
      ) {
        this.pericias[pericia].atributo =
          this.atributos['carisma'].modificador +
          this.pericias[pericia].valorGrau;
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

  treinamento(pericia: string) {
    this.pericias[pericia].grau = String(this.selectedValue);
    let valor = this.grauTreinamento(this.pericias[pericia].grau);
    this.pericias[pericia].valorGrau = valor;
    this.atualizarPericias();
  }

  rolagemPericia(pericia: string) {
    var randomNumber = Math.floor(Math.random() * this.dados.d20.sides) + 1;
    let rolagem = randomNumber + this.pericias[pericia].atributo;
    let texto =
      'Dado natural: ' +
      randomNumber +
      '\nModificador: ' +
      this.pericias[pericia].atributo +
      '\nResultado: ' +
      rolagem;
    console.log(texto);
  }

}
