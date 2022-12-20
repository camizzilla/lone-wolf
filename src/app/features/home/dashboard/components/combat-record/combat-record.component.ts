import { isNgContainer } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CombatRecordService } from './services/combat-record.service';

@Component({
  selector: 'app-combat-record',
  templateUrl: './combat-record.component.html',
  styleUrls: ['./combat-record.component.css']
})
export class CombatRecordComponent implements OnInit {

  @Input() combactSkillLW: number = 0;
  @Input() endurancePointsLW: number = 0;
  @Output() endurancePointsLWEvent = new EventEmitter<number>();

  isCollapsed:boolean = false;

  combatRatio: number = 0;
  endurancePointsEnemy: number = 0;
  ls:number | string = 0;
  n:number | string = 0;

  isCombatRecord: boolean = false;
  isEnemyDead: boolean = false;
  isLoneWolfDead: boolean = false;

  formEnemy: FormGroup;

  constructor(
    private fb: FormBuilder,
    public crService: CombatRecordService
    ) {
    this.formEnemy = fb.group({
      combactSkill: [null, Validators.required],
      endurancePoints: [null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const { combactSkill, endurancePoints } = this.formEnemy.value;
    this.combatRatio = this.combactSkillLW - combactSkill;
    this.endurancePointsEnemy = endurancePoints;
    this.isCombatRecord = true;
    this.formEnemy.get('combactSkill')?.setValue(null);
    this.formEnemy.get('endurancePoints')?.setValue(null);
  }

  fight(){
    const resCombat: any = this.crService.fight(this.combatRatio);

    if( resCombat.ls === 'M' ){
      this.isLoneWolfDead = true;
      this.endurancePointsLW = 0;
      this.endurancePointsLWEvent.emit(this.endurancePointsLW);
    } else {
      this.endurancePointsLW = this.endurancePointsLW - (+resCombat.ls);
      if ( this.endurancePointsLW <= 0 ) {
        this.isLoneWolfDead = true;
        this.endurancePointsLW = 0;
        this.endurancePointsLWEvent.emit(this.endurancePointsLW);
      } else {
        this.ls = resCombat.ls;
        this.endurancePointsLWEvent.emit(this.endurancePointsLW);
      };
    }

    if( resCombat.n === 'M' ){
      this.isEnemyDead = true;
      this.endurancePointsEnemy = 0;
    } else {
      this.endurancePointsEnemy = this.endurancePointsEnemy - (+resCombat.n);
      if( this.endurancePointsEnemy <= 0 ){
        this.isEnemyDead = true;
        this.endurancePointsEnemy = 0;
      } else this.n = resCombat.n;
    }
  }

  annul(){
    this.reset()
  }

  reset(){
  this.combatRatio = 0;
  this.endurancePointsEnemy = 0;
  this.ls = 0;
  this.n = 0;

  this.isCombatRecord = false;
  this.isEnemyDead = false;
  this.isLoneWolfDead = false;
  }

}
