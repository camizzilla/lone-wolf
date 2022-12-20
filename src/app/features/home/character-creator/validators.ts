import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

function maxCheckValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if( !control?.value) return null;
      const { kaiDiscipline } = control.value;
      return kaiDiscipline?.length !== 5 ? { maxCheck: true } : null;
    };
}

function masterInWeaponValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if( !control?.value) return null;
      const { kaiDiscipline, masterInWeapon } = control.value;
      return kaiDiscipline.includes('Scherma') && !masterInWeapon ? { masterInWeapon: true } : null;
    };
  }



export { maxCheckValidator, masterInWeaponValidator }

