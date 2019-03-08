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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimePage,
    AnimesPage,
    CharacterPage,
    CharactersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimePage,
    AnimesPage,
    CharacterPage,
    CharactersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
