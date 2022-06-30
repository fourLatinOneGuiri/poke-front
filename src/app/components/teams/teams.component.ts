import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonDTO } from 'src/app/models/pokemon-dto';
import { Trainer } from 'src/app/models/trainer';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  trainerList: Trainer[] = [];
  name: string = '';
  trainerId: number = 0;
  pokemonDto = new PokemonDTO('');

  constructor(private trainerService: TrainerServiceService) {}

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainerList = trainers;
    });
  }

  deletePokemon(trainerId: number, name: string) {
    var pokemonDto = new PokemonDTO(name);
    console.log('fasdf');
    this.trainerService.deletePokemon(pokemonDto, trainerId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
