import { Component, OnInit } from '@angular/core';
import { AshuSirService } from '../ashu-sir.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  userdetails:any={}


  constructor(private ashuservice : AshuSirService) { }
  addAddress(){
    let userCheckoutDetails = {

      name: this.userdetails.name,

      address: this.userdetails.address,

      city: this.userdetails.city,

      pincode: this.userdetails.pincode,

      phone: this.userdetails.phone,
  };
  this.ashuservice.getUserDataFromAddressComponent(userCheckoutDetails);
  }
  ngOnInit(): void {
  }

}
