import { Pokemon } from './pokemon';

export class Trainer {


 private _pokemonList: Pokemon[] = [];

  constructor(private _id : number, private _name : string, private _hobby : string,
     private _age : number, private _photo : string = 'https://i.pinimg.com/564x/6f/f3/2d/6ff32de2ab1621cddf0e74b74f04fae9.jpg') {

     }

     public get id(): number{
      return this._id;
     }



     public get name(): string{
      return this._name;
     }

     public set name(name :string){
      this._name = name;
     }

     public get hobby(): string{
      return this._hobby;
     }

     public set hobby(hobby : string){
      this._hobby = hobby;
     }

     public get age(): number{
      return this._age;
     }

     public set age(age : number){
      this._age = age;
     }

     public get photo(): string{
      return this._photo;
     }

     public set photo(photo : string){
      this._photo = photo;
     }
     public get pokemonList():Pokemon[]{
      return this._pokemonList;
     }

}
