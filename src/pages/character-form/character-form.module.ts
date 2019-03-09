import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterFormPage } from './character-form';

@NgModule({
  declarations: [
    CharacterFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterFormPage),
  ],
})
export class CharacterFormPageModule {}
