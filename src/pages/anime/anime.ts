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
  anime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public animesProvider: AnimesProvider){
    
    this.getAnime(navParams.get('id'));
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
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimePage');
  }
}
