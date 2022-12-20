import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItems } from '../../models/character-datas';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() title = ''
  @Input() items: ListItems[] = [];
  @Input() maxItems: number = 10;

  @Output() openModifyItemEvent = new EventEmitter<ListItems>();
  @Output() deleteItemEvent = new EventEmitter<ListItems>();
  @Output() modifyItemEvent = new EventEmitter<any>();
  @Output() closeInputItemEvent = new EventEmitter();
  @Output() addNewItemEvent = new EventEmitter<string>();


  public inputValueModify: string = '';
  public inputNewValue: string = '';
  constructor() { }

  ngOnInit(): void {}

  handleModifyButtonClick( item: ListItems ){
    this.inputValueModify = item.name;
    this.openModifyItemEvent.emit(item);
  }

  handleDeleteButtonClick(item: ListItems){
    this.deleteItemEvent.emit(item);
  }

  setInputValueModify({target}:any){
    this.inputValueModify = target.value
  }

  handleModifyInputClick(item: ListItems){
    item.name !== this.inputValueModify && this.modifyItemEvent.emit({itemSelected: item, itemNameModify: this.inputValueModify});
  }

  handleCloseInputClick(){
    this.deleteItemEvent.emit();
  }

  setInputValue({target}:any){
    this.inputNewValue = target.value;
  }

  handleAddButtonClick(){
    this.inputNewValue && this.addNewItemEvent.emit(this.inputNewValue);
    this.inputNewValue = ''
  }
}
