import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AnimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {
  animes: { id: number, name: string, photo: string }[] = [
    {
      id: 1,
      name: "Berserk",
      photo: "#"
    },
    {
      id: 2,
      name: "Pokémon",
      photo: "#"
    },
    {
      id: 3,
      name: "Digimon",
      photo: "#"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  newAnime(){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Criando anime...',
      buttons: ['Ok']
    });
    alert.present();
  }

  showAnime(id){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Mostrando anime...',
      buttons: ['Ok']
    });
    alert.present();
  }

  updateAnime(id){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Atualizando anime...',
      buttons: ['Ok']
    });
    alert.present();
  }

  deleteAnime(id){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Deletando anime...',
      buttons: ['Ok']
    });
    alert.present();
  }
}