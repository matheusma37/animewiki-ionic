import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimePage } from '../anime/anime';
import { AnimeFormPage } from '../anime-form/anime-form';
import { AnimesProvider } from '../../providers/animes/animes';

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
  animes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public animesProvider: AnimesProvider) {
      this.getAnimes();
  }

  ionViewWillEnter() {
    this.getAnimes();
  }
    
  getAnimes() {
    this.animesProvider.findAll()
    .then(
      data => {
        this.animes = data;
        console.log(this.animes);
      }
    );
  }    

  newAnime(){
    this.navCtrl.push(AnimeFormPage);
  }

  showAnime(id: number){
    this.navCtrl.push(AnimePage, {id: id});
  }

  updateAnime(id: number){
    this.navCtrl.push(AnimeFormPage, {id: id});
  }

  deleteAnime(id: number){
    this.animesProvider.deleteById(id)
    .then(
      () => {
        this.getAnimes();
        this.toast.create(
          {
            message:'Anime removido.',
            duration:3000,
            position:'botton'
          }
        ).present();
      }
    )
  }

}