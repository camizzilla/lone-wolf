import { Component, OnInit } from '@angular/core';
import { CharacterDateService } from 'src/app/shared/services/character-date.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public charaterDataService: CharacterDateService,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.localStorageJson && this.charaterDataService.loadStore(this.storeService.localStorageJson)
  }

}
