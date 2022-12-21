import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LoneWolf } from '../models/character-datas';
import { CharacterDateService } from './character-date.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private setting = {
    element: {
      dynamicDownload: null as unknown as HTMLElement
    }
  }

  constructor() { }

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

  dynamicDownloadJson(lonewolf: LoneWolf){
    const currentDate = new Date();

    of(lonewolf).subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: `lonewolf-${currentDate.getDay()}-${currentDate.getMonth()}-${currentDate.getFullYear()}.json`,
        text: JSON.stringify(res)
      });
    })

  }

dyanmicDownloadByHtmlTag( arg: { fileName: string, text: string }){

  if (!this.setting.element.dynamicDownload) {
    this.setting.element.dynamicDownload = document.createElement('a');
  }

  const element = this.setting.element.dynamicDownload;
  const fileType =  'text/json';
  element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
  element.setAttribute('download', arg.fileName);

  let event = new MouseEvent("click");
  element.dispatchEvent(event);
}

}
