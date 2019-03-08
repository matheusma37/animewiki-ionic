import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

    this.character = characters[parseInt(navParams.get('id'))-1];
  }

  updateCharacter(){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Atualizando character...',
      buttons: ['Ok']
    });
    alert.present();
  }

  deleteCharacter(){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Deletando character...',
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }
}
