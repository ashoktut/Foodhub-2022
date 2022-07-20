import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { duration } from 'moment';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  isLoading: boolean;
  addresses: any[] = [];

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.isLoading = true;
    //this.global.showLoader();
    setTimeout(()=> {
      this.addresses = [
        {address: "Oriental Plaza, Fordsburg", house:"29 Zeet Street", id: "7f8sfe", landmark: "OP", lat: 26.1830738, lng: 91.7404976999999, title: "Home", user_id: "1"},
        {address: "Golf Course, Woodmead", house:"92 Benz Street", id: "546n4bbf", landmark: "Corner", lat: 22.1073837, lng: 86.740497326, title: "Work", user_id: "1"},
        {address: "Sun City, Rustenburg", house:"72 Corlett Drive", id: "37hb5bg", landmark: "Resort", lat: 37.3734575, lng: 15.74326784, title: "Other", user_id: "1"},
      ];
      this.isLoading = false;
      //this.global.setLoader();
    }, 3000);
  }

  getIcon(title) {
    return this.global.getIcon(title);
  }

  editAddress(address) {

  }

  deleteAddress(address) {

  }

}
