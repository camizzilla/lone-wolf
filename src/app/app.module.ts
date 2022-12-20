import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CharacterCreatorComponent } from './features/home/character-creator/character-creator.component';
import { DashboardComponent } from './features/home/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDiceComponent } from './shared/components/input-dice/input-dice.component';
import { ChoiceKaiDisciplinesComponent } from './features/home/character-creator/components/choice-kai-disciplines/choice-kai-disciplines.component';
import { NumericBlockComponent } from './shared/components/numeric-block/numeric-block.component';
import { ListWithDescriptionComponent } from './features/home/dashboard/components/list-with-description/list-with-description.component';
import { ListItemsComponent } from './shared/components/list-items/list-items.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { CombatRecordComponent } from './features/home/dashboard/components/combat-record/combat-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharacterCreatorComponent,
    DashboardComponent,
    InputDiceComponent,
    ChoiceKaiDisciplinesComponent,
    NumericBlockComponent,
    ListWithDescriptionComponent,
    ListItemsComponent,
    CheckboxComponent,
    CombatRecordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
