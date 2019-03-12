import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CharactersProvider, Character } from '../../providers/characters/characters';
import { AnimesProvider, Anime } from '../../providers/animes/animes';

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
  character: Character;
  animes: Array<Anime>;
  anime_id: number = 0;
  //file: File = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public charactersProvider: CharactersProvider,
    public animesProvider: AnimesProvider) {
    
      this.character = new Character();

      if(this.navParams.data.id){
        this.charactersProvider.findById(this.navParams.data.id)
        .then(
          (result: any) => {
            this.character = result;
          }
        );
      }

      this.animes = new Array<Anime>();
    
      this.animesProvider.findAll()
      .then(
        (result: any) => {
          this.animes = result;
        }
      );
  }

  saveCharacter(){
    /*
    if(this.file){
      this.character.photo = this.file.name;
    }
    */
    this.character.anime = this.animes.find(anime => anime.id == this.anime_id);
    
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
    );
  }
/*
  updateFile(event){
    this.file = event.srcElement.files[0];
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterFormPage');
  }
}
