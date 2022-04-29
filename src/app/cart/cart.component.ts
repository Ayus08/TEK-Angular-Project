import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AshuSirService } from '../ashu-sir.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems:any=[]
totalPrice:any=0

  constructor(private ashu:AshuSirService, private http:HttpClient) {
var url = "https://apifromashu.herokuapp.com/api/cakecart"
let myheaders = new HttpHeaders()
myheaders = myheaders.append("authtoken", localStorage["token"])
var options = {
  headers:myheaders
}
var body = { }
this.ashu.getCartItems(url,body,options).subscribe({
    next:(response:any)=>{
      console.log("Response from cart items api",response)
      this.cartitems = response.data
      this.cartitems.forEach((each:any)=>{
        this.totalPrice=this.totalPrice + each.price * each.quantity
      })
    },
    error:(error)=>{
      console.log("Error from cart api",error)
    }
  })
   }
   remove(index:any){

    // this.cartitems.splice(this.cartitems.indexOf(this.cakeid),1);

    var url="https://apifromashu.herokuapp.com/api/removecakefromcart"

    let myheaders = new HttpHeaders()

    myheaders = myheaders.append("authtoken",localStorage["token"])

    var options={

      headers: myheaders

    }

    var body={

      cakeid:this.cartitems[index].cakeid

     

    }

    this.http.post(url,body,options).subscribe({

      next:(response:any)=>{

        console.log("Response from remove cart items api",response)

          window.location.reload()

      },

      error:(error)=>{

        console.log("Error from remove cart items api", error)

      }

    })

  }

   checkoutf(){
    let cartDetails: any = {

      cartitems: this.cartitems,

      totalprice: this.totalPrice,

    };

    this.ashu.getCartDatafromCartComponent(cartDetails);
   }

   decquant(index:any){

    var url="https://apifromashu.herokuapp.com/api/removeonecakefromcart"

    let myheaders = new HttpHeaders()

    myheaders = myheaders.append("authtoken",localStorage["token"])

    var options={

      headers: myheaders

    }

    var body={

      cakeid:this.cartitems[index].cakeid

     

    }

    this.http.post(url,body,options).subscribe({

      next:(response:any)=>{

        console.log("Response from remove one item from cart items api",response)

        this.cartitems[index].quantity=this.cartitems[index].quantity - 1
        window.location.reload()

      },

      error:(error)=>{

        console.log("Error from remove one item from cart items api", error)

      }

    })

  }

  incquant(index:any){

    var url="https://apifromashu.herokuapp.com/api/addcaketocart"

      let myheaders=new HttpHeaders()

      myheaders=myheaders.append("authtoken",localStorage["token"])      

      var options={

        headers:myheaders

      }

      var body={

        name:this.cartitems[index].name,

        cakeid:this.cartitems[index].cakeid,

        price:this.cartitems[index].price,

        image:this.cartitems[index].image,

        weight:this.cartitems[index].weight        

      }

      console.log(body)

      this.http.post(url,body,options).subscribe({

        next:(response:any)=>{

          console.log("Response from increase quantity api", response)
          window.location.reload()

          this.cartitems[index].quantity+=1


        },error(error:any){

          console.log("Error from increase quantity api",error)

        }

      })

  }

  ngOnInit(): void {
  }

}
