import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-dice',
  templateUrl: './input-dice.component.html',
  styleUrls: ['./input-dice.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputDiceComponent,
    multi: true
  }]
})
export class InputDiceComponent implements ControlValueAccessor {

  @Input() title:string = '';
  @Input() dice:number = 10;
  @Input() addNumber:number = 0;
  @Input() array:string[] = [];
  @Output() selectedEvent = new EventEmitter<string | number>();
  value: number | string | undefined;

  constructor() { }

  rollDice(){
    const resDice = Math.floor(Math.random() * this.dice) + this.addNumber;
    this.value = this.array?.length ? this.array.at(resDice) : resDice;
    this.onChanged(this.value);
    this.onTouched;
    this.selectedEvent.emit(this.value);
  }

  onTouched!: () => void;
  onChanged: any =  () => {};

  writeValue(diceRes: number): void {
    this.value = diceRes;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
