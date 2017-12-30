import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { ListOfCleanersPage } from '../list-of-cleaners/list-of-cleaners';
import { CleanerDetailsPage } from '../cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';
import { UserProvider } from '../../providers/user/user';
import { CallNumber } from '@ionic-native/call-number';
import { CleanerLocationPage } from '../cleaner-location/cleaner-location';

@Component({
  selector: 'page-search-cleaners',
  templateUrl: 'search-cleaners.html'
})
export class SearchCleanersPage {

  phone:'';
  temparr = [];
  filteredusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider,private callNumber: CallNumber) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }

  ionViewDidLoad() {

  }

  searchuser(searchbar) {
    
  
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    
    if (q.trim() == '') {
      return;
    }

    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName && v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      v.rate && v.rate.toLowerCase().indexOf(q.toLowerCase()) > -1 ) {
        return true;
      }
      
      return false;
    })
  }

  call(){
    this.callNumber.callNumber("0108983809", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));

  }

  viewprofile(){
    this.navCtrl.push(CleanerDetailsPage);
  }

  viewCleanerLocation(){
    this.navCtrl.push(CleanerLocationPage);
  }

  



  goToListOfCleaners(params){
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
