import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() isVisibled:boolean = false;
  @Input() descr:string = '';
  @Input() isChecked:boolean = false;

  @Output() checkboxValueEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCheck(target:any){
    this.checkboxValueEvent.emit(target.checked)
  }

  toggleCheck(target:any){
    target.checked = !target.checked;
    this.handleCheck(target)
  }

}
