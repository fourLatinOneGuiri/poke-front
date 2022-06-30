export class Pokemon {
  constructor(
    private _name: string,
    private _ability: string,
    private _height: number,
    private _weight: number,
    private _photo: string = 'https://pokemon-go.name/wp-content/uploads/2019/08/102-pokemon-exeggcute.png',
    private _hpValue: number,
    private _hpTitle: string,
    private _attackValue: number,
    private _attackTitle: string,
    private _defenseValue: number,
    private _defenseTitle: string,
    private _speedValue: number,
    private _speedTitle: string,
  ) {}

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get ability(): string {
    return this._ability;
  }
  public set ability(value: string) {
    this._ability = value;
  }
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }
  public get weight(): number {
    return this._weight;
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }
  public get hpValue(): number {
    return this._hpValue;
  }
  public set hpValue(value: number) {
    this._hpValue = value;
  }
  public get hpTitle(): string {
    return this._hpTitle;
  }
  public set hpTitle(value: string) {
    this._hpTitle = value;
  }
  public get attackValue(): number {
    return this._attackValue;
  }
  public set attackValue(value: number) {
    this._attackValue = value;
  }
  public get attackTitle(): string {
    return this._attackTitle;
  }
  public set attackTitle(value: string) {
    this._attackTitle = value;
  }
  public get defenseValue(): number {
    return this._defenseValue;
  }
  public set defenseValue(value: number) {
    this._defenseValue = value;
  }
  public get defenseTitle(): string {
    return this._defenseTitle;
  }
  public set defenseTitle(value: string) {
    this._defenseTitle = value;
  }
  public get speedValue(): number {
    return this._speedValue;
  }
  public set speedValue(value: number) {
    this._speedValue = value;
  }
  public get speedTitle(): string {
    return this._speedTitle;
  }
  public set speedTitle(value: string) {
    this._speedTitle = value;
  }
}
