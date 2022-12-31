import { Injectable } from '@angular/core';
import { CharacterBaseService } from 'src/app/shared/services/character-base.service';

@Injectable({
  providedIn: 'root'
})
export class InputDiceService extends CharacterBaseService {

  constructor() {
    super();
   }
}
