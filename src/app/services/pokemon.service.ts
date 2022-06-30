import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(this.baseUrl + name);
  }
  getAllPokemon(): Observable<AllPokemonInterface> {
    return this.http.get<AllPokemonInterface>(
      this.baseUrl + '?offset=0&limit=100'
    );
  }
}

export interface PokemonInterface {
  name: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  height: number;
  weight: number;
  sprites: {
    back_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

// Interfaz original GetAPokemon
// export interface PokemonInterface {
//   name: string;
//   abilities: [
//     {
//       ability: {
//         name: string;
//       };
//     }
//   ];
//   height: number;
//   weight: number;
//   sprites: {
//     back_default: string;
//   };
// }

export interface AllPokemonInterface {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
