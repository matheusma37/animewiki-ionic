import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  anime: { id: number, name: string, photo: string, description: string } = null;
  file: File = null;

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

    if(navParams.get('id')){
      console.log('Parâmetro passado!');
      this.anime = animes[parseInt(navParams.get('id'))-1];
    } else {
      console.log('Parâmetro não passado!');
      this.anime = { id: null, name: '', photo: '', description: '' };
    }
  }

  saveAnime(){
    if(this.file){
      this.anime.photo = this.file.name;
    }
    let alert = this.alertCtrl.create({
      title: 'Teste!',
      subTitle: 'Salvando anime!',
      buttons: ['Ok']
    });
    alert.present();
  }

  updateFile(event){
    this.file = event.srcElement.files[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimeFormPage');
  }
}
