import { CharacterFormPage } from './../pages/character-form/character-form';
import { AnimeFormPage } from './../pages/anime-form/anime-form';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnimesPage } from '../pages/animes/animes';
import { CharactersPage } from '../pages/characters/characters';
import { AnimePage } from '../pages/anime/anime';
import { CharacterPage } from '../pages/character/character';
import { AnimesProvider } from '../providers/animes/animes';
import { CharactersProvider } from '../providers/characters/characters';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimePage,
    AnimesPage,
    AnimeFormPage,
    CharacterPage,
    CharactersPage,
    CharacterFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimePage,
    AnimesPage,
    AnimeFormPage,
    CharacterPage,
    CharactersPage,
    CharacterFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimesProvider,
    CharactersProvider
  ]
})
export class AppModule {}
