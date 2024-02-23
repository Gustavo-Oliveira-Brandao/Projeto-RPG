import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolagensService {

  constructor() {}
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



}
