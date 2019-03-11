import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CharacterPage } from '../character/character';
import { CharacterFormPage } from '../character-form/character-form';
import { CharactersProvider, Character } from '../../providers/characters/characters';

/**
 * Generated class for the CharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {
  characters: Array<Character>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public charactersProvider: CharactersProvider) {
      this.getCharacters();
  }
  
  ionViewWillEnter() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersProvider.findAll()
    .then(
      (result: any) => {
        this.characters = result;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersPage');
  }

  newCharacter(){
    this.navCtrl.push(CharacterFormPage);
  }

  showCharacter(id: number){
    this.navCtrl.push(CharacterPage, {id: id});
  }

  updateCharacter(id: number){
    this.navCtrl.push(CharacterFormPage, {id: id});
  }

  deleteCharacter(id: number){
    this.charactersProvider.deleteById(id)
    .then(
      () => {
        this.getCharacters();
        this.toast.create(
          {
            message:'Character removido.',
            duration:3000,
            position:'botton'
          }
        ).present();
      }
    );
  }
}
