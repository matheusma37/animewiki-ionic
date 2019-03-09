import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  character: {
    id: number,
    name: string,
    photo: string,
    description: string,
    anime: {
      id: number,
      name: string
    }
  } = null;
  file: File = null;
  anime_id: number = 1;
  animes: { id: number, name: string, photo: string, description: string }[] = [
    {
      id: 1,
      name: "Berserk",
      photo: "#",
      description: "Anime de terror."
    },
    {
      id: 2,
      name: "Pokémon",
      photo: "#",
      description: "Anime de fantasia."
    },
    {
      id: 3,
      name: "Digimon",
      photo: "#",
      description: "Anime de aventura."
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
    var characters: {
        id: number,
        name: string,
        photo: string,
        description: string,
        anime: {
          id: number,
          name: string
        }
      }[] = [
      {
        id: 1,
        name: "Guts",
        photo: "#",
        description: "Espadachin negro.",
        anime: {
          id: 1,
          name: "Berserk"
        }
      },
      {
        id: 2,
        name: "Ash",
        photo: "#",
        description: "Treinador pokémon.",
        anime: {
          id: 1,
          name: "Pokémon"
        }
      },
      {
        id: 3,
        name: "Takato",
        photo: "#",
        description: "Domador digimon.",
        anime: {
          id: 1,
          name: "Digimon"
        }
      }
    ];

    if(navParams.get('id')){
      console.log('Parâmetro passado!');
      this.character = characters[parseInt(navParams.get('id'))-1];
    } else {
      console.log('Parâmetro não passado!');
      this.character = {
        id: null,
        name: '',
        photo: '',
        description: '',
        anime: {
          id: null,
          name: ""
        }
      };
    }
  }

  saveCharacter(){
    if(this.file){
      this.character.photo = this.file.name;
    }
    this.character.anime = this.animes[this.anime_id - 1];
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Salvando character!',
      buttons: ['Ok']
    });
    alert.present();
    console.log(this.character.anime.name);
  }

  updateFile(event){
    this.file = event.srcElement.files[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterFormPage');
  }
}
