import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChoiceKaiDisciplines } from 'src/app/shared/models/character-datas';
import { DatesService } from 'src/app/shared/services/dates.service';

@Component({
  selector: 'app-choice-kai-disciplines',
  templateUrl: './choice-kai-disciplines.component.html',
  styleUrls: ['./choice-kai-disciplines.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ChoiceKaiDisciplinesComponent,
    multi: true
  }]
})
export class ChoiceKaiDisciplinesComponent implements ControlValueAccessor {

  kaiDisciplinesList!: string[];
  maxDisciplines:number = 5;
  checkedList:string[] = [];
  value!: ChoiceKaiDisciplines | null;
  weaponSkill: any = null;

  constructor( public datesService: DatesService) { }

  onTouched!: () => void;
  onChanged: any =  () => {};

  writeValue(value: ChoiceKaiDisciplines): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleCheck(target:any){
    let checked = target.checked;
    const value = target.value;

    if (checked) {
      if( this.checkedList.length + 1 <= this.maxDisciplines ) {
        this.checkedList = [...this.checkedList, value]
      } else {
        target.checked = false;
      }
    } else {
      value === 'Scherma' && ( this.weaponSkill = null )
      this.checkedList.splice(this.checkedList.indexOf(value), 1);
    }
    this.onChanged({
      kaiDiscipline: this.checkedList,
      masterInWeapon: this.weaponSkill
    })
  }

  handlerValueSelectedInputDice(weaponSkillValue: any){
    this.weaponSkill = weaponSkillValue;
    this.onChanged({
      kaiDiscipline: this.checkedList,
      masterInWeapon: this.weaponSkill
    })
  }

  changed(){
    if( this.checkedList.length === this.maxDisciplines ){
      if(!this.checkedList.includes('Scherma')){
        this.onChanged({
          kaiDiscipline: this.checkedList,
          masterInWeapon: this.weaponSkill
        })
      } else {
        this.weaponSkill && this.onChanged({
          kaiDiscipline: this.checkedList,
          masterInWeapon: this.weaponSkill
        })
      }
    } else this.onChanged(null)
    this.onTouched;
  }

  toggleCheck(target:any){
    target.checked = !target.checked;
    this.handleCheck(target)
  }

}
