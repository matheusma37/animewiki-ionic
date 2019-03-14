import { Anime } from './../../providers/animes/animes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimeFormPage } from '../anime-form/anime-form';
import { AnimesProvider } from '../../providers/animes/animes';

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
  anime: Anime;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public animesProvider: AnimesProvider){
    
    this.getAnime(this.navParams.data.id);
  }

  getAnime(id: number) {
    this.anime = new Anime();
    //this.anime.photo = new Photo();
    this.animesProvider.findById(id)
    .then(
      (result: any) => {
        this.anime = result;
      }
    );
  }

  updateAnime(){
    this.navCtrl.push(AnimeFormPage, {id: this.anime.id});
  }

  deleteAnime(){
    this.animesProvider.deleteById(this.anime.id)
    .then(
      () => {
        this.toast.create(
          {
            message:'Anime removido.',
            duration:3000,
            position:'botton'
          }
        ).present();
        this.navCtrl.popToRoot();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimePage');
  }
}
