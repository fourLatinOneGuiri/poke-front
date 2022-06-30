import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';
import { TrainerDTO } from 'src/app/models/trainer-dto';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css'],
})
export class TrainersComponent implements OnInit {
  name: string = '';
  hobby: string = '';
  age: number = 0;

  pokemonList: Pokemon[] = [];
  trainerList: Trainer[] = [];

  isCreateTrainerEnabled: boolean = false;
  isShowTrainerEnabled: boolean = true;
  show: boolean = false;

  constructor(private trainerService: TrainerServiceService) {}

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(){
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainerList = trainers;
    });
  }

  addTrainer() {
    this.trainerService
      .postTrainers(
        new TrainerDTO(this.name, this.age, this.hobby)
      )
      .subscribe((trainer) => {
        this.ngOnInit();
        //this.trainerList.push(trainer);
      });
  }
  delete() {
    console.log('ssfsfsf');
  }

  createTrainerForm() {
    this.isCreateTrainerEnabled = !this.isCreateTrainerEnabled;
  }

  showTrainerForm() {
    this.isShowTrainerEnabled = !this.isShowTrainerEnabled;
  }
}
