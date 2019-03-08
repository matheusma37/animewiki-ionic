import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AnimeFormPage } from '../anime-form/anime-form';

/**
 * Generated class for the AnimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})

export class AnimePage {
  anime: { id: number, name: string, photo: string, description: string } = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
    var animes: { id: number, name: string, photo: string, description: string }[] = [
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

    this.anime = animes[parseInt(navParams.get('id'))-1];
  }

  updateAnime(){
    this.navCtrl.push(AnimeFormPage, {id: this.anime.id});
  }

  deleteAnime(){
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Deletando anime...',
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimePage');
  }
}
