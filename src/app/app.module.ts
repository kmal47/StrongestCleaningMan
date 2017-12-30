import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SearchCleanersPage } from '../pages/search-cleaners/search-cleaners';
import { ListOfCleanersPage } from '../pages/list-of-cleaners/list-of-cleaners';
import { CleanerDetailsPage } from '../pages/cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../pages/request-has-been-send/request-has-been-send';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { config } from './app.firebaseconfig';

import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Dashboard } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
import { UserProvider } from '../providers/user/user';
import { SignupPageModule } from '../pages/signup/signup.module';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { Camera } from '@ionic-native/camera';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { CallNumber } from '@ionic-native/call-number';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { MapPage } from '../pages/map/map';
import { CleanerLocationPage } from '../pages/cleaner-location/cleaner-location';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SearchCleanersPage,
    ListOfCleanersPage,
    CleanerDetailsPage,
    RequestHasBeenSendPage,
    Dashboard,
    TabsPage,
    UserForgotpassword,
    UpdateprofilePage,
    MapPage,
    CleanerLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SearchCleanersPage,
    ListOfCleanersPage,
    CleanerDetailsPage,
    RequestHasBeenSendPage,
    Dashboard,
    TabsPage,
    UserForgotpassword,
    UpdateprofilePage,
    MapPage,
    CleanerLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ImghandlerProvider,
    Camera,
    CallNumber,
    File,
    FileChooser,
    FilePath,
    Geolocation
  
  ]
})
export class AppModule {}