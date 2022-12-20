import { Component, Input, OnInit } from '@angular/core';
import { KaiDisciplinesListInfo } from 'src/app/shared/models/character-datas';

@Component({
  selector: 'app-list-with-description',
  templateUrl: './list-with-description.component.html',
  styleUrls: ['./list-with-description.component.css']
})
export class ListWithDescriptionComponent implements OnInit {

  @Input() title: string = '';
  @Input() items: KaiDisciplinesListInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
