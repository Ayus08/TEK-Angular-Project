import { Component, OnInit } from '@angular/core';
import { AshuSirService } from '../ashu-sir.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userdetails: any;
  totalprice: any;
  cakes: any;
  orderdetails: any={};
  constructor(private ashu:AshuSirService) {
    let cartDetails = this.ashu.sendCartDetails();
  
    this.userdetails = this.ashu.sendUserDetails();

    this.totalprice = cartDetails.totalprice;

    this.cakes = cartDetails.cartitems;
   }

  ngOnInit(): void {

  }
  placeorder() {

    var url = 'https://apifromashu.herokuapp.com/api/addcakeorder';

    let myheaders = new HttpHeaders();

    myheaders = myheaders.append('authtoken', localStorage['token']);

    var options = {

      headers: myheaders,

    };

    var body = {

      cakes: this.cakes,

      price: this.totalprice,

      name: this.userdetails.name,

      address: this.userdetails.address,

      city: this.userdetails.city,

      pincode: this.userdetails.pincode,

      phone: this.userdetails.phone,

    };

    this.ashu.placeOrder(url, body, options).subscribe({

      next: (response: any) => {

        console.log('Response from add cake order api: ', response);

        this.orderdetails = response.order;

      },

      error: (error: any) => {

        console.log('Error from add cake order api: ', error);

      },

    });

  }
}
