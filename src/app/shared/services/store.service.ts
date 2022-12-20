import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  savelocalStorageJson(item: any){
    localStorage.setItem( 'jsonSaved', JSON.stringify(item) );
  }

  cancelLocalStorageJson(){
    localStorage.removeItem('jsonSaved');
    window.location.reload();
  }

  get localStorageJson() {
    return localStorage.getItem('jsonSaved');
  }


  constructor() { }
}
