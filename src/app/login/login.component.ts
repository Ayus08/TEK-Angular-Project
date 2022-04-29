import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AshuSirService } from '../ashu-sir.service';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {


constructor (private ashuservice : AshuSirService, private router: Router,private toaster:ToastrService){

}

 /* constructor(private http : HttpClient) { } */
 responseError:any


  userdetails:any={



  }

  login(){

    var url="https://apifromashu.herokuapp.com/api/login"

    this.ashuservice.login(url,this.userdetails).subscribe({

      next:(response: any)=>{

        console.log("response from login api",response)

        if(response.token){
          localStorage["token"] = response.token
          localStorage["loggedinUser"] = response.email
          var url = "https://apifromashu.herokuapp.com/api/cakecart"
            var headers = new HttpHeaders()
            headers = headers.append("authtoken",localStorage["token"])
            var body = {}
            var options = {
                headers:headers
            }
            this.ashuservice.getCartItems(url,body,options).subscribe({
                next:(response:any)=>{
                    console.log("response from cart items api in navbar",response)
                    this.ashuservice.cartitems = response.data
                    this.toaster.success("Login Successfully!!")
                }
            })
          this.router.navigate(["/"])
        }
        else{
          this.responseError = "Invalid Login"
        }
      },

      error:(error: any)=>{

        console.log("Error from login api",error)

      }

    })
  }

  /*
  login(){

    var url="https://apifromashu.herokuapp.com/api/login"

    this.http.post(url,this.userdetails).subscribe({

      next:(response: any)=>{

        console.log("response from login users api",response)

        this.userdetails.email=response.email,

        this.userdetails.password=response.password

      },

      error:(error)=>{

        console.log("Error from users api",error)

      }

    })

  }

*/

  ngOnInit(): void {

  }

}
