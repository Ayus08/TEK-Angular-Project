import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AshuSirService {

  userCheckoutDetails: any={}
  cartDetails: any={}

  constructor(private http:HttpClient) { 
  }

  loggedinUser:any
  cartitems:any
  price:any
  userdetails:any
  
  signup(url:any, body:any)
  {
    return this.http.post(url,body)
  }

  login(url:any, body:any)
  {
    return this.http.post(url,body)
  }

  getCakeDetails(url:any)
  {
    return this.http.get(url)
  }

  searchCakes(url:any)
  {
    return this.http.get(url)
  }

  addCakeToCart(url:any, body:any, options:any)
  {
    return this.http.post(url,body,options)
  }
  
  getCartItems(url:any, body:any, options:any)
  {
    return this.http.post(url,body,options)
  }

  uploadImage(url:any, body:any, options:any)
  {
    return this.http.post(url,body,options)
  }

  getUserDataFromAddressComponent(userCheckoutDetails: any) {

    this.userCheckoutDetails = userCheckoutDetails;
    console.log("Details from address",userCheckoutDetails)

  }

  getCartDatafromCartComponent(cartDetails:any)
  {
    this.cartDetails = cartDetails;
    console.log("Details from cart",cartDetails)
  }
 
sendCartDetails() 
{return this.cartDetails;
}

sendUserDetails() {
  return this.userCheckoutDetails;
}

placeOrder(url: any, body: any, options: any) {

  return this.http.post(url, body, options);

}

getmyorders(url: any, body: any, options: any) {
  return this.http.post(url, body, options);
}

changepassword(url:any,data:any){

  return this.http.post(url,data)

}

  
  ascending(data:any)
  {
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price - obj2.price
    })
    return data
  }
  descending(data:any)
  {
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price - obj1.price
    })
    return data
  }
  
}
