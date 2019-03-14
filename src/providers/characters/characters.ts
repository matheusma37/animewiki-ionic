import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../animes/animes';

/*
  Generated class for the CharactersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharactersProvider {
  apiUrl = '/api/characters/';
  characters: any;

  constructor(public http: HttpClient) {
    console.log('Hello CharactersProvider Provider');
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
 
  save(character: any) {
    let data = JSON.stringify(character);
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
            console.log(character);
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
  
export class Character {
  id: number;
  name: string;
  description: string;
  photo: string;
  favoriteFood: string;
  height: number;
  weight: number;
  age: number;
  anime: Anime;
}
/*
export class Photo {
  id: number;
  name: string;
  file: Blob;
}
*/