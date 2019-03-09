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
  anime: any;
  file: File = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, public animesProvider: AnimesProvider){
    
    if(navParams.get('id')){
      this.getAnime(navParams.get('id'));
    } else {
      this.anime = new Anime();
    }
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

  saveAnime(){
    if(this.file){
      this.anime.photo = this.file.name;
    }

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
    )
  }

  updateFile(event){
    this.file = event.srcElement.files[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimeFormPage');
  }
}