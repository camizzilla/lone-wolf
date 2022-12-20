import { Component, OnInit } from '@angular/core';
import { CharacterDateService } from 'src/app/shared/services/character-date.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cdService: CharacterDateService,
    public storeService: StoreService
    ) { }

  ngOnInit(): void {
  }

  save(){
    this.cdService
  }

  restore(){

  }

  clear(){
    this.storeService.cancelLocalStorageJson()
  }

}
