import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AnimePage } from '../anime/anime';

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
    this.navCtrl.push(AnimePage, {id: id});
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