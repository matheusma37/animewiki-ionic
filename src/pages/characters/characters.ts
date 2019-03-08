import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CharacterPage } from '../character/character';

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
  characters: {
    id: number,
    name: string,
    photo: string,
    description: string,
    anime:
      {
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersPage');
  }

  newCharacter(){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Criando character...',
      buttons: ['Ok']
    });
    alert.present();
  }

  showCharacter(id){
    this.navCtrl.push(CharacterPage, {id: id});
  }

  updateCharacter(id){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Atualizando character...',
      buttons: ['Ok']
    });
    alert.present();
  }

  deleteCharacter(id){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Deletando character...',
      buttons: ['Ok']
    });
    alert.present();
  }
}
