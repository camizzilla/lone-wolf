import { Injectable } from '@angular/core';
import { ResCombat } from 'src/app/shared/models/character-datas';

@Injectable({
  providedIn: 'root'
})
export class CombatRecordService {

  resCombat: ResCombat[][] = [
    [{n: 0, ls: "M"},{n: 0, ls: "M"},{n: 0, ls: 8},{n: 0, ls: 6},{n: 1, ls: 6},{n: 3, ls: 5},{n: 4, ls: 5},{n: 5, ls: 4},{n: 6, ls: 4},{n: 7, ls: 4},{n: 8, ls: 3},{n: 9, ls: 3}],
    [{n: 0, ls: "M"},{n: 0, ls: 8},{n: 0, ls: 7},{n: 1, ls: 6},{n: 2, ls: 5},{n: 4, ls: 4},{n: 5, ls: 4},{n: 6, ls: 3},{n: 7, ls: 3},{n: 8, ls: 3},{n: 9, ls: 3},{n: 10, ls: 2}],
    [{n: 0, ls: 8},{n: 0, ls: 7},{n: 1, ls: 6},{n: 2, ls: 5},{n: 3, ls: 5},{n: 5, ls: 4},{n: 6, ls: 3},{n: 7, ls: 3},{n: 8, ls: 3},{n: 9, ls: 2},{n: 10, ls: 2},{n: 11, ls: 2}],
    [{n: 0, ls: 8},{n: 1, ls: 7},{n: 2, ls: 6},{n: 3, ls: 5},{n: 4, ls: 4},{n: 6, ls: 3},{n: 7, ls: 3},{n: 8, ls: 2},{n: 9, ls: 2},{n: 10, ls: 2},{n: 11, ls: 2},{n: 12, ls: 2}],
    [{n: 1, ls: 7},{n: 2, ls: 6},{n: 3, ls: 5},{n: 4, ls: 4},{n: 5, ls: 4},{n: 7, ls: 2},{n: 8, ls: 2},{n: 9, ls: 2},{n: 10, ls: 2},{n: 11, ls: 2},{n: 12, ls: 2},{n: 14, ls: 1}],
    [{n: 2, ls: 6},{n: 3, ls: 6},{n: 4, ls: 5},{n: 5, ls: 4},{n: 6, ls: 3},{n: 8, ls: 2},{n: 9, ls: 2},{n: 10, ls: 2},{n: 11, ls: 1},{n: 12, ls: 0},{n: 14, ls: 0},{n: 16, ls: 0}],
    [{n: 3, ls: 5},{n: 4, ls: 5},{n: 5, ls: 4},{n: 6, ls: 3},{n: 7, ls: 2},{n: 9, ls: 1},{n: 10, ls: 1},{n: 11, ls: 1},{n: 12, ls: 0},{n: 14, ls: 0},{n: 16, ls: 0},{n: 18, ls: 0}],
    [{n: 4, ls: 4},{n: 5, ls: 4},{n: 6, ls: 3},{n: 7, ls: 2},{n: 8, ls: 1},{n: 10, ls: 0},{n: 12, ls: 0},{n: 14, ls: 0},{n: 16, ls: 0},{n: 0, ls: 0},{n: 0, ls: 0},{n: 0, ls: 0}],
    [{n: 5, ls: 3},{n: 6, ls: 3},{n: 7, ls: 2},{n: 8, ls: 0},{n: 9, ls: 0},{n: 11, ls: 0},{n: 12, ls: 0},{n: 14, ls: 0},{n: 16, ls: 0},{n: 18, ls: 0},{n: "M", ls: 0},{n: "M", ls: 0}],
    [{n: 6, ls: 0},{n: 7, ls: 0},{n: 8, ls: 0},{n: 9, ls: 0},{n: 10, ls: 0},{n: 12, ls: 0},{n: 14, ls: 0},{n: 16, ls: 0},{n: 18, ls: 0},{n: "M", ls: 0},{n: "M", ls: 0},{n: "M", ls: 0}]
  ];


  fight(combatRatio: number){
    const index = this.combatRatioIndex(combatRatio);
    const resDice = Math.floor(Math.random() * 10);
    return index && this.resCombat[resDice][index]
  }

  combatRatioIndex(combatRatio: number){
    if(combatRatio <= -11) return 0;
    if(combatRatio === -10 || combatRatio === -9) return 1;
    if(combatRatio === -8 || combatRatio === -7) return 2;
    if(combatRatio === -6 || combatRatio === -5) return 3;
    if(combatRatio === -4 || combatRatio === -3) return 4;
    if(combatRatio === -2 || combatRatio === -1 || combatRatio === 0) return 5;
    if(combatRatio === 1 || combatRatio === 2 ) return 6;
    if(combatRatio === 3 || combatRatio === 4) return 7;
    if(combatRatio === 5 || combatRatio === 6) return 8;
    if(combatRatio === 7 || combatRatio === 8) return 9;
    if(combatRatio === 9 || combatRatio === 10) return 10;
    if(combatRatio >= 11) return 11;
    return null;

  }

  constructor() { }
}
