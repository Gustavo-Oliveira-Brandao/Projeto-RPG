import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtributosService {

  constructor() { }

  personagem = {
    nome: {
      id: '',
    },
    raca: {
      id: ''
    },
    classe: {
      id: ''
    },
    nivel: {
      atributo: 1
    },

    exp: {
      atributo: 0
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

  atualizarAtributos() {
    Object.keys(this.atributos).forEach((atributo) => {
      this.atributos[atributo].modificador = Math.trunc(
        (this.atributos[atributo].atributo - 10) / 2
      );
    });

  }

  pericias: {
    [key: string]: {
      id: string;
      atributo: number;
      grau: string;
      valorGrau: number;
      tipoAtributo: string;
      passiva?: number
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
      passiva: 10
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

  atualizar(){
    this.atualizarAtributos();
    this.atualizarPericias();

  }

  atualizarPericias() {
    Object.keys(this.pericias).forEach((pericia) => {
      if (this.pericias[pericia].tipoAtributo === this.atributos['forca'].id) {
        if(this.pericias[pericia].grau === "D"){
        this.pericias[pericia].atributo =
          this.atributos['forca'].modificador +
          this.pericias[pericia].valorGrau;
        } else {
          this.pericias[pericia].atributo =
            this.atributos['forca'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['destreza'].id
      ) {
        if(this.pericias[pericia].grau === "D"){
          this.pericias[pericia].atributo =
            this.atributos['destreza'].modificador +
            this.pericias[pericia].valorGrau;
        } else{
          this.pericias[pericia].atributo =
            this.atributos['destreza'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      } else if (
        this.pericias[pericia].tipoAtributo ===
        this.atributos['constituicao'].id
      ) {
        if (this.pericias[pericia].grau === "D"){
        this.pericias[pericia].atributo =
          this.atributos['constituicao'].modificador +
          this.pericias[pericia].valorGrau;
        } else {
          this.pericias[pericia].atributo =
            this.atributos['constituicao'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      } else if (
        this.pericias[pericia].tipoAtributo ===
        this.atributos['inteligencia'].id
      ) {
        if (this.pericias[pericia].grau === "D"){
        this.pericias[pericia].atributo =
          this.atributos['inteligencia'].modificador +
          this.pericias[pericia].valorGrau;
        } else {
          this.pericias[pericia].atributo =
            this.atributos['inteligencia'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['sabedoria'].id
      ) {
        if (this.pericias[pericia].grau === "D"){
          this.pericias[pericia].atributo =
          this.atributos['sabedoria'].modificador +
          this.pericias[pericia].valorGrau;
        } else {
          this.pericias[pericia].atributo =
            this.atributos['sabedoria'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      } else if (
        this.pericias[pericia].tipoAtributo === this.atributos['carisma'].id
      ) {
        if (this.pericias[pericia].grau === "D"){
        this.pericias[pericia].atributo =
          this.atributos['carisma'].modificador +
          this.pericias[pericia].valorGrau;
        } else {
          this.pericias[pericia].atributo =
            this.atributos['carisma'].modificador +
            this.pericias[pericia].valorGrau + this.personagem.nivel.atributo;
        }
      }

    });

    this.pericias['percepcao'].passiva = 10 + this.pericias['percepcao'].atributo;
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
    this.pericias[pericia].valorGrau = this.grauTreinamento(this.pericias[pericia].grau);
    this.atualizarPericias();
  }


}
