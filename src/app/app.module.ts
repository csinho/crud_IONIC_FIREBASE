import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ServicoProvider } from '../providers/servico/servico';
import { SalvarPage } from '../pages/salvar/salvar';


export const firebaseConfig = {
  apiKey: "AIzaSyCIl0H86aor9NVYB8nzmzRoW4D7JQTrhBU",
  authDomain: "modelo-crud.firebaseapp.com",
  databaseURL: "https://modelo-crud.firebaseio.com",
  projectId: "modelo-crud",
  storageBucket: "modelo-crud.appspot.com",
  messagingSenderId: "239344244432",
  appId: "1:239344244432:web:ede5d93bd31e1baa"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalvarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalvarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicoProvider
  ]
})
export class AppModule { }
