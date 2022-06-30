import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonDTO } from '../models/pokemon-dto';
import { Trainer } from '../models/trainer';
import { TrainerDTO } from '../models/trainer-dto';

@Injectable({
  providedIn: 'root',
})
export class TrainerServiceService {
  private readonly baseUrl = 'http://localhost:8080/trainers';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Array<Trainer>> {
    return this.http.get<Array<Trainer>>(this.baseUrl);
  }
  postTrainers(trainer: TrainerDTO): Observable<any> {
    return this.http.post<TrainerDTO>(this.baseUrl + '/add-trainer/', trainer);
  }

  deletePokemon(pokemonName: PokemonDTO, id: number): Observable<void> {
    return this.http.patch<void>(
      this.baseUrl + '/' + id + '/delete-pokemon/' + pokemonName.name,
      {}
    );
  }

  addPokemon(id: Number, pokemon: PokemonDTO): Observable<void> {
    console.log('pokemon', pokemon);
    return this.http.patch<void>(
      this.baseUrl + '/' + id + '/add-pokemon',
      pokemon
    );
  }
}
