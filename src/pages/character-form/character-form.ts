import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CharactersProvider, Character } from '../../providers/characters/characters';
import { AnimesProvider } from '../../providers/animes/animes';

/**
 * Generated class for the CharacterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-form',
  templateUrl: 'character-form.html',
})
export class CharacterFormPage {
  character: any;
  anime: any;
  anime_id: number = 0;
  file: File = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public charactersProvider: CharactersProvider,
    public animesProvider: AnimesProvider) {
    
    if(navParams.get('id')){
      this.getCharacter(navParams.get('id'));
    } else {
      this.character = new Character();
    }
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

  getAnime(id: number) {
    this.animesProvider.findById(id)
    .then(
      data => {
        this.anime = data;
        console.log(this.anime);
      }
    );
  }

  saveCharacter(){
    if(this.file){
      this.character.photo = this.file.name;
    }

    this.getAnime(this.anime_id);
    this.character.anime = this.anime;
    
    this.charactersProvider.save(this.character)
    .then(
      () => {
        this.toast.create(
          {
            message:'Character salvo.',
            duration:3000,
            position:'botton'
          }
        ).present();
        this.navCtrl.popToRoot();
      }
    )
  }

  updateFile(event){
    this.file = event.srcElement.files[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterFormPage');
  }
}
