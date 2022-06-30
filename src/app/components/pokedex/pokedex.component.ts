import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDTO } from '../../models/pokemon-dto';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[];
  trainerList: Trainer[];
  isDetailsEnabled: boolean = false;

  trainerSeleccionado: number;
  page!: number;
  // dataset: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor(
    private pokemonService: PokemonService,
    private trainerService: TrainerServiceService
  ) {
    this.pokemonList = [];
    this.trainerList = [];

    this.trainerSeleccionado = 0;
  }

  ngOnInit(): void {
    this.getAllPokemon();
    this.getAllTrainer();
  }

  public getAllTrainer(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainerList = data;
    });
  }

  public getPokemon(name: string): void {
    this.pokemonService.getPokemon(name).subscribe((data) => {
      this.pokemonList.push(
        new Pokemon(
          data.name,
          data.abilities[0].ability.name,
          data.height,
          data.weight,
          data.sprites.back_default,
          data.stats[0].base_stat,
          data.stats[0].stat.name,
          data.stats[1].base_stat,
          data.stats[1].stat.name,
          data.stats[2].base_stat,
          data.stats[2].stat.name,
          data.stats[3].base_stat,
          data.stats[3].stat.name,
        )
      );
    });
  }

  public getAllPokemon(): void {
    this.pokemonService.getAllPokemon().subscribe((data) => {
      data.results.forEach((pokemon) => {
        this.getPokemon(pokemon.name);
      });
    });
  }
  addPokemon(pokemon: Pokemon) {
    var pokemonDTO = new PokemonDTO(pokemon.name);
    var trainerId = this.trainerSeleccionado;
    this.trainerService.addPokemon(trainerId, pokemonDTO).subscribe(() => {
      this.ngOnInit;
    });
  }

  showDetails(){
    this.isDetailsEnabled = !this.isDetailsEnabled;


  }



}
