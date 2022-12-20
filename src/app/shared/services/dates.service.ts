import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  private _kaiDisciplinesList = [
    "Mimetismo",
    "Caccia",
    "Sesto senso",
    "Orientamento",
    "Guarigione",
    "Scherma",
    "Psicoschermo",
    "Psicolaser",
    "Affinità animale",
    "Telecinesi"
  ];

  private _weaponsList = [
    "Pugnale",
    "Lancia",
    "Mazza",
    "Daga",
    "Martello",
    "Spada",
    "Ascia",
    "Spada",
    "Asta",
    "Spadone"
  ];

  // private _items = [
  //   "breadsword",
  //   "sword",
  //   "helmet",
  //   "two meals",
  //   "chainmail waistcoat",
  //   "mace",
  //   "healing potion",
  //   "quarterstaff",
  //   "spear",
  //   "12 gold crowns"
  // ];

  private _items = [
    "Spadone",
    "Spada",
    "Elmo",
    "Due pasti",
    "Cotta di Maglia",
    "Mazza",
    "Pozione Magica",
    "Asta",
    "Lancia",
    "12 Monete d'oro"
  ];

  private _initLoneWolf = {
    combatSkill: 0,
    endurancePoints: 0,
    kaiDisciplines: [],
    weaponSkill: '',
    weapons: ["Ascia"],
    backpack: {
      items: [],
      meals: 1
    },
    specialItems: ['Mappa Sommerlund'],
    beltPouch: 0
  };

  _kaiDisciplinesListInfo = [
    { name:"Mimetismo",
      descr: ''
    },
    { name:"Caccia",
      descr: 'Non sei obbligato a fare un pasto quando ti viene ordinato'
    },
    { name:"Sesto senso",
      descr: ''
    },
    { name:"Orientamento",
      descr: ''
    },
    { name:"Guarigione",
      descr: 'Un punto di Resistenza in più per ogni tappa senza combattimento'
    },
    { name:"Scherma",
      descr: 'Maestro di scherma in ... : più due punti di combattività'
    },
    { name:"Psicoschermo",
      descr: 'Non perdi punti se vieni attaccatto dallo Psicolaser'
    },
    { name:"Psicolaser",
      descr: '2 punti di Combattività in più'
    },
    { name:"Affinità animale",
      descr: ''
    },
    { name:"Telecinesi",
      descr: ''
    }
  ];

  constructor() { }

  get kaiDisciplinesList(){
    return this._kaiDisciplinesList;
  }

  get weaponsList(){
    return this._weaponsList;
  }

  get items(){
    return this._items;
  }

  get initLoneWolf(){
    return this._initLoneWolf;
  }

  get kaiDisciplinesListInfo(){
    return this._kaiDisciplinesListInfo
  }
}
