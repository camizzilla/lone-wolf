import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  addIsModifyTolistItemsArray(items:string[], itemSelected: any = null){
    return items.map((item: string) => { return { name: item, isModify: item === itemSelected?.name ? true : false } })
  }


}
