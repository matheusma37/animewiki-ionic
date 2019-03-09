import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AnimesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimesProvider {
  apiUrl = '/api/animes/';
  animes: any;

  constructor(public http: HttpClient) {
    console.log('Hello AnimesProvider Provider');
  }

  findAll() {
    return new Promise(
      resolve => {
        this.http.get(this.apiUrl+"")
        .subscribe(
          data => {
            resolve(data);
            console.log('The result is:');
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    );
  }
    
  findById(id: number) {
    return new Promise(
      resolve => {
        this.http.get(this.apiUrl+id)
        .subscribe(
          data => {
            resolve(data);
            console.log('The result is:');
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    );
  }
    
  deleteById(id: number) {
    return new Promise(
      resolve => {
        this.http.delete(this.apiUrl+id)
        .subscribe(
          data => {
            resolve(data);
            console.log('The result is:');
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    );
  }
 
  save(anime: any) {
    let data = JSON.stringify(anime);
    return new Promise(
      (resolve, reject) => {
        this.http.post(
          this.apiUrl,
          data,
          {
            headers: {
              'Content-Type':'application/json'
            }
          }
        )
        .subscribe(
          res => {
            resolve(res);
            console.log('The result is:'+res);
            console.log(anime);
          },
          err => {
            reject(err);
            console.log(err);
          }
        );
      }
    );
  }
}
    
export class Anime {
  id: number;
  name: string;
  description: string;
  genre: string;
  photo: string;
  numberOfEpisodes: number;
  numberOfSeasons: number;
}