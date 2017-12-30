import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UpdateprofilePage } from '../updateprofile/updateprofile'
import { MapPage } from '../map/map';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  avatar: string;
  displayName: string;
  rate: string;
  address: string;
  phone: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public zone: NgZone, public alertCtrl: AlertController,public imghandler: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.phone = res.phone;
      this.rate = res.rate;
      this.address = res.address;
      this.rate = res.rate;
    
      
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed');
          statusalert.present();
      })
      })
  }

  update(){
    this.navCtrl.push(UpdateprofilePage);
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot(HomePage);
    })
  }

  viewmap(){
    this.navCtrl.push(MapPage);
  }

}
