import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPage } from '../pages/new/new';
import { ScanPage } from '../pages/scan/scan';
import { InfoPage } from '../pages/info/info';
import { ApiProvider } from '../providers/api';

import { Clipboard } from '@ionic-native/clipboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { RecentsPage } from '../pages/recents/recents';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage,
    ScanPage,
    InfoPage,
    RecentsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPage,
    ScanPage,
    InfoPage,
    RecentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Clipboard,
    BarcodeScanner,
    ApiProvider
  ]
})
export class AppModule {}
