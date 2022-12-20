import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterDateService } from 'src/app/shared/services/character-date.service';
import { DatesService } from 'src/app/shared/services/dates.service';
import { maxCheckValidator, masterInWeaponValidator } from './validators';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css'],
})
export class CharacterCreatorComponent {
  form: FormGroup;
  submitted: boolean = false;
  @Output() isDashboardVisibleEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public datesService: DatesService,
    private charaterDateService: CharacterDateService
  ) {
    this.form = fb.group({
      combactSkill: [null, Validators.required],
      endurancePoints: [null, Validators.required],
      kaiDisciplines: [null, [Validators.required, maxCheckValidator(), masterInWeaponValidator()]],
      findInTheRuins: [null, Validators.required],
      goldCoin: [null, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid){
      this.charaterDateService.setDateFromChararcterGenerator(this.form.value);
      this.isDashboardVisibleEvent.emit();
    }
  }
}
