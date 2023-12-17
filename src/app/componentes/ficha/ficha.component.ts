import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css',
})
export class FichaComponent {
  forca = {
    id: 'forca',
    atributo: 10,
    modificadorForca: 0
  };
  destreza = {
    id: 'destreza',
    atributo: 10,
    modificadorDestreza: 0
  };

  constituicao = {
    id: 'constituicao',
    atributo: 10,
    modificadorConstituicao: 0
  };
  inteligencia = {
    id: 'inteligencia',
    atributo: 10,
    modificadorInteligencia: 0
  };

  sabedoria = {
    id: 'sabedoria',
    atributo: 10,
    modificadorSabedoria: 0
  };

  carisma = {
    id: 'carisma',
    atributo: 10,
    modificadorCarisma: 0
  };

  acrobacia = {
    id: 'acrobacia',
    atributo: 0
  }

  adestramento = {
    id: 'adestramento',
    atributo: 0
  }

  atletismo = {
    id: 'atletismo',
    atributo: 0
  }

  atuacao = {
    id: 'atuacao',
    atributo: 0
  }

  cavalgar = {
    id: 'cavalgar',
    atributo: 0
  }

  conhecimento = {
    id: 'conhecimento',
    atributo: 0
  }

  cura = {
    id: 'cura',
    atributo: 0
  }

  diplomacia = {
    id: 'diplomacia',
    atributo: 0
  }

  enganacao = {
    id: 'enganacao',
    atributo: 0
  }

  fortitude = {
    id: 'fortitude',
    atributo: 0
  }

  furtividade = {
    id: 'furtividade',
    atributo: 0
  }

  guerra = {
    id: 'guerra',
    atributo: 0
  }

  iniciativa = {
    id: 'iniciativa',
    atributo: 0
  }

  intimidacao = {
    id: 'intimidacao',
    atributo: 0
  }

  intuicao = {
    id: 'intuicao',
    atributo: 0
  }

  investigacao = {
    id: 'investigacao',
    atributo: 0
  }

  luta = {
    id: 'luta',
    atributo: 0
  }

  percepcao = {
    id: 'percepcao',
    atributo: 0
  }

  pontaria = {
    id: 'pontaria',
    atributo: 0
  }

  reflexos = {
    id: 'reflexos',
    atributo: 0
  }

  sobrevivencia = {
    id: 'sobrevivencia',
    atributo: 0
  }

  vontade = {
    id: 'vontade',
    atributo: 0
  }

  proficiencia = {
    id:'proficiencia',
    atributo: 0
  }

  atualizarAtributos() {
    this.forca.modificadorForca = Math.trunc((this.forca.atributo - 10) / 2);
    this.destreza.modificadorDestreza = Math.trunc((this.destreza.atributo - 10) / 2);
    this.constituicao.modificadorConstituicao = Math.trunc((this.constituicao.atributo - 10) / 2);
    this.inteligencia.modificadorInteligencia = Math.trunc((this.inteligencia.atributo - 10) / 2);
    this.sabedoria.modificadorSabedoria = Math.trunc((this.sabedoria.atributo - 10) / 2);
    this.carisma.modificadorCarisma = Math.trunc((this.carisma.atributo - 10) / 2);

  }
}
