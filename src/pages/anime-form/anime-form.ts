import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AnimesProvider, Anime } from '../../providers/animes/animes';

/**
 * Generated class for the AnimeFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anime-form',
  templateUrl: 'anime-form.html',
})
export class AnimeFormPage {
  anime: Anime;
  //file: File = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public animesProvider: AnimesProvider){
      this.anime = new Anime();

      if(this.navParams.data.id){
        this.animesProvider.findById(this.navParams.data.id)
        .then(
          (result: any) => {
            this.anime = result;
          }
        );
      }
  }

  saveAnime(){
    /*
    if(this.file){
      this.anime.photo = this.file.name;
    }
    */
    this.animesProvider.save(this.anime)
    .then(
      () => {
        this.toast.create(
          {
            message:'Anime salvo.',
            duration:3000,
            position:'botton'
          }
        ).present();
        this.navCtrl.popToRoot();
      }
    );
  }
/*
  updateFile(event){
    this.file = event.srcElement.files[0];
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimeFormPage');
  }
}