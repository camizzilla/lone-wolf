import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-block',
  templateUrl: './numeric-block.component.html',
  styleUrls: ['./numeric-block.component.css']
})
export class NumericBlockComponent implements OnInit {

  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() maxValue: number = 99;
  @Output() numberEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  agreeValue(){
    this.value < this.maxValue && this.numberEvent.emit('+')
  }

  dagreeValue(){
    this.value > 0 && this.numberEvent.emit('-')
  }
}
