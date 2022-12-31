

export abstract class CharacterBaseService {

  private _value: number = 0;
  private _maxValue: number | null = null;

  constructor() { }

  setValue( value: number ){
    this._value = value;
  }

  get value(){
    return this._value;
  }

  get maxValue(){
    return this._maxValue;
  }

  setMaxValue( maxValue: number ){
    this._maxValue = maxValue;
  }

}
