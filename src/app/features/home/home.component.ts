import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDashboardVisible = false;

  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    this.storeService.localStorageJson && this.isDashboardVisibleToggle();
  }

  isDashboardVisibleToggle(){
    this.isDashboardVisible = true;
  }

}
