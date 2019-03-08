import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  characters: { id: number, name: string, photo: string, anime: {id: number, name: string} }[] = [
    {
      id: 1,
      name: "Guts",
      photo: "#",
      anime: {
        id: 1,
        name: "Berserk"
      }
    },
    {
      id: 2,
      name: "Ash",
      photo: "#",
      anime: {
        id: 1,
        name: "Pokémon"
      }
    },
    {
      id: 3,
      name: "Takato",
      photo: "#",
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
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Mostrando character...',
      buttons: ['Ok']
    });
    alert.present();
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
