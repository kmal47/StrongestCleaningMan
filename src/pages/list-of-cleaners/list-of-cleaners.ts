import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CleanerDetailsPage } from '../cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';

@Component({
  selector: 'page-list-of-cleaners',
  templateUrl: 'list-of-cleaners.html'
})
export class ListOfCleanersPage {

  constructor(public navCtrl: NavController) {
  }
  goToCleanerDetails(params){
    if (!params) params = {};
    this.navCtrl.push(CleanerDetailsPage);
  }goToRequestHasBeenSend(params){
    if (!params) params = {};
    this.navCtrl.push(RequestHasBeenSendPage);
  }
}
