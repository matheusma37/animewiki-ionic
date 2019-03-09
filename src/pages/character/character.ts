import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CharacterFormPage } from '../character-form/character-form';
import { CharactersProvider } from '../../providers/characters/characters';

/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {
  character: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public charactersProvider: CharactersProvider) {
      this.getCharacter(navParams.get('id'));
  }
  
  getCharacter(id: number) {
    this.charactersProvider.findById(id)
    .then(
      data => {
        this.character = data;
        console.log(this.character);
      }
    );
  }

  updateCharacter(){
    this.navCtrl.push(CharacterFormPage, {id: this.character.id});
  }

  deleteCharacter(){
    this.charactersProvider.deleteById(this.character.id)
    .then(
      () => {
        this.toast.create(
          {
            message:'Character removido.',
            duration:3000,
            position:'botton'
          }
        ).present();
        this.navCtrl.popToRoot();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }
}
