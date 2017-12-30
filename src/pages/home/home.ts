import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SearchCleanersPage } from '../search-cleaners/search-cleaners';
import { ListOfCleanersPage } from '../list-of-cleaners/list-of-cleaners';
import { CleanerDetailsPage } from '../cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSearchCleaners(params){
    if (!params) params = {};
    this.navCtrl.push(SearchCleanersPage);
  }goToListOfCleaners(params){
    if (!params) params = {};
    this.navCtrl.push(ListOfCleanersPage);
  }goToCleanerDetails(params){
    if (!params) params = {};
    this.navCtrl.push(CleanerDetailsPage);
  }goToRequestHasBeenSend(params){
    if (!params) params = {};
    this.navCtrl.push(RequestHasBeenSendPage);
  }
}
