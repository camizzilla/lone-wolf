import { Injectable } from '@angular/core';
import { LoneWolf, CharacterGenerationValue, ListItems } from '../models/character-datas';
import { DatesService } from './dates.service';
import { StoreService } from './store.service';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})

export class CharacterDateService {

 private _lonewolf: LoneWolf;
 private _weapon: ListItems[];
 private _items: ListItems[];
 private _specialItems: ListItems[];

 private _maxEndurancePoints: number = 0;
 private _maxItemsBackpack: number = 8;
 private _maxItems: number = 0;
 private _maxItemsMeals: number = 0;
 private _isVisibled: boolean = false;

  constructor(
    public datesService: DatesService,
    private tools: ToolsService,
    private storeService: StoreService
  ) {
    this._lonewolf = datesService.initLoneWolf;
    this._weapon = this.tools.addIsModifyTolistItemsArray(this._lonewolf.weapons);
    this._items = this.tools.addIsModifyTolistItemsArray(this._lonewolf.backpack.items);
    this._specialItems = this.tools.addIsModifyTolistItemsArray(this._lonewolf.specialItems);
  }

  loadStore(store: string){
    this._lonewolf = JSON.parse(store);
    this.setItemsArray();
    this.setMaxItems();
    this._isVisibled = this._lonewolf.kaiDisciplines.some(kai => kai === 'Psicolaser');
    const isWeaponSkill = this._lonewolf.weapons.length && this._lonewolf.weapons.some(weapon => weapon === this._lonewolf.weaponSkill?.toLowerCase());
    isWeaponSkill && (this._lonewolf.combatSkill = this._lonewolf.combatSkill + 2);
    if(!this.storeService.localStorageJson ){
      this.saveStore();
      window.location.reload();
    } else {
      this.saveStore();
    }
  }

  saveStore(){
    this.storeService.savelocalStorageJson(this._lonewolf);
  }

  setDateFromChararcterGenerator( value: CharacterGenerationValue ){
    this._lonewolf.combatSkill = value.combactSkill;
    this._lonewolf.endurancePoints = value.endurancePoints;
    this._lonewolf.kaiDisciplines = [ ...value.kaiDisciplines.kaiDiscipline]
    this._lonewolf.weaponSkill = value.kaiDisciplines.masterInWeapon;
    this._lonewolf.beltPouch = value.goldCoin;
    this.setActionChart(value.findInTheRuins);
    this.setItemsArray();
    this.setMaxItems();

    this._isVisibled = this._lonewolf.kaiDisciplines.some(kai => kai === 'Psicolaser');
    this._lonewolf.weaponSkill === 'Ascia' && (this._lonewolf.combatSkill = this._lonewolf.combatSkill + 2);
    this.saveStore()
  }

  setItemsArray(){
    this._weapon = this.tools.addIsModifyTolistItemsArray(this._lonewolf.weapons);
    this._items = this.tools.addIsModifyTolistItemsArray(this._lonewolf.backpack.items);
    this._specialItems = this.tools.addIsModifyTolistItemsArray(this._lonewolf.specialItems);
  }

  setMaxItems(){
    this._maxItems = this._maxItemsBackpack - this._lonewolf.backpack.meals;
    this._maxItemsMeals = this._maxItemsBackpack - this._lonewolf.backpack.items.length;
    this._maxEndurancePoints = this._lonewolf.endurancePoints;
  }

  setActionChart(itemsUnderRuin: string){
    switch (itemsUnderRuin) {
      case "Elmo":
        this._lonewolf.endurancePoints += 2;
        this._lonewolf.specialItems.push(itemsUnderRuin);
        break;
      case "Cotta di Maglia":
        this._lonewolf.endurancePoints += 4;
        this._lonewolf.specialItems.push(itemsUnderRuin);
        break;
      case "Due pasti":
        this._lonewolf.backpack.meals += 2;
        break;
      case "Pozione Magica":
        this._lonewolf.backpack.items.push(itemsUnderRuin);
        break;
      case "12 Monete d'oro":
        this._lonewolf.beltPouch += 12;
        break;
      default:
        itemsUnderRuin === this._lonewolf.weaponSkill && (this._lonewolf.combatSkill = this._lonewolf.combatSkill + 2);
        this._lonewolf.weapons.push(itemsUnderRuin);
    }
  };

  get lonewolf(){
    return this._lonewolf;
  }

  setCombatSkill(opeation: string){
    this._lonewolf.combatSkill = opeation === '+' ? this._lonewolf.combatSkill + 1 : this._lonewolf.combatSkill - 1;
  }

  setEndurancePoints(opeation: string){
    this._lonewolf.endurancePoints =  opeation === '+' ? this._lonewolf.endurancePoints + 1 : this._lonewolf.endurancePoints -1;
  }

  get maxEndurancePoints(){
    return this._maxEndurancePoints;
  }

  get maxItemsMeals(){
    return this._maxItemsMeals;
  }

  setMeals(opeation: string){
    this._lonewolf.backpack.meals = opeation === '+' ? this._lonewolf.backpack.meals + 1 : this._lonewolf.backpack.meals - 1;
    this._maxItems = this._maxItemsBackpack - this._lonewolf.backpack.meals;
  }

  setGoldCoins(opeation: string){
    this._lonewolf.beltPouch =  opeation === '+' ? this._lonewolf.beltPouch + 1 : this._lonewolf.beltPouch -1;
  }

   get kaiDisciplinesListInfo(){
    return this.datesService.kaiDisciplinesListInfo.filter(kai => {
      return this.lonewolf.kaiDisciplines.some(kaiSelected => {

        if( this.lonewolf.weaponSkill && kaiSelected === 'Scherma' && kai.name === 'Scherma' ) {
          let descr = kai.descr.replace('...', this.lonewolf.weaponSkill);
          kai.descr = descr;
      }
          return kaiSelected === kai.name
      })
  })
  }

  get weapons(){
    return this._weapon;
  }

  resetListWeapons(){
    this._weapon = this.tools.addIsModifyTolistItemsArray(this._lonewolf.weapons);
  }

  deleteWeapon( item: ListItems ){
    this._lonewolf.weapons = this._lonewolf.weapons.filter( (weapon: string) => weapon !== item.name );
    this._lonewolf.weaponSkill?.toLowerCase() === item.name.toLowerCase() && (this._lonewolf.combatSkill = this._lonewolf.combatSkill - 2);
    !this._lonewolf.weapons.length && (this._lonewolf.combatSkill = this._lonewolf.combatSkill - 4);
  }

  openModifyWeapon( item: ListItems ){
    this._weapon = this.tools.addIsModifyTolistItemsArray(this._lonewolf.weapons, item);
  }

  modifyWeapon({ itemSelected, itemNameModify }:any){
    const index = this._lonewolf.weapons.findIndex( (weapon: string) => weapon === itemSelected.name);
    this._lonewolf.weapons[index] = itemNameModify;
    this.resetListWeapons()
  }

  addNewWeapon(newItem: string){
    !this._lonewolf.weapons.length && (this._lonewolf.combatSkill = this._lonewolf.combatSkill + 4);
    this._lonewolf.weapons.push(newItem);
    this._lonewolf.weaponSkill?.toLowerCase() === newItem.toLowerCase() && (this._lonewolf.combatSkill = this._lonewolf.combatSkill + 2);
    this.resetListWeapons()
  }

  get items(){
    return this._items;
  }

  get maxItems(){
    return this._maxItems;
  }

  resetListItems(){
    this._items = this.tools.addIsModifyTolistItemsArray(this._lonewolf.backpack.items);
  }

  deleteItems( itemSelected: ListItems ){
    this._lonewolf.backpack.items = this._lonewolf.backpack.items.filter( (item: string) => item !== itemSelected.name )
    this._maxItemsMeals = this._maxItemsBackpack - this._lonewolf.backpack.items.length;
  }

  openModifyItems( item: ListItems ){
    this._items = this.tools.addIsModifyTolistItemsArray(this._lonewolf.backpack.items, item);
  }

  modifyItems({ itemSelected, itemNameModify }:any){
    const index = this._lonewolf.backpack.items.findIndex( (weapon: string) => weapon === itemSelected.name);
    this._lonewolf.backpack.items[index] = itemNameModify;
    this.resetListItems()
  }

  addNewItem(newItem: string){
    this._lonewolf.backpack.items.push(newItem);
    this.resetListItems()
    this._maxItemsMeals = this._maxItemsBackpack - this._lonewolf.backpack.items.length;
  }

  get specialItems(){
    return this._specialItems;
  }

  resetSpecialItems(){
    this._specialItems = this.tools.addIsModifyTolistItemsArray(this._lonewolf.specialItems);
  }

  deleteSpecialItems( itemSelected: ListItems ){
    this._lonewolf.specialItems = this._lonewolf.specialItems.filter( (item: string) => item !== itemSelected.name )
  }

  openModifySpecialItems( item: ListItems ){
    this._specialItems = this.tools.addIsModifyTolistItemsArray(this._lonewolf.specialItems, item);
  }

  modifySpecialItems({ itemSelected, itemNameModify }:any){
    const index = this._lonewolf.specialItems.findIndex( (weapon: string) => weapon === itemSelected.name);
    this._lonewolf.specialItems[index] = itemNameModify;
    this.resetSpecialItems()
  }

  addNewSpecialItems(newItem: string){
    this._lonewolf.specialItems.push(newItem);
    this.resetSpecialItems()
  }

  addValueToCombactSkill( checkboxVal: boolean, value: number ){
    this._lonewolf.combatSkill = checkboxVal ? this._lonewolf.combatSkill + value : this._lonewolf.combatSkill - value;
  }

  get isVisibled() {
    return this._isVisibled;
  }

  endurancePointsHit( endurancePoints: number){
    this._lonewolf.endurancePoints = endurancePoints;
  }

  downLoad(){
    this.storeService.dynamicDownloadJson( this.lonewolf)
  }
}
