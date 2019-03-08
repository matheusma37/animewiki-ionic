import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimeFormPage } from './anime-form';

@NgModule({
  declarations: [
    AnimeFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimeFormPage),
  ],
})
export class AnimeFormPageModule {}
