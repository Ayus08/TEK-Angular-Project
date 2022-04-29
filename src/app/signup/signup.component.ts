import { Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  userdetails:any={
name:'',
email:'',
password:''
  }
  users:any=[]
  constructor(private toastr:ToastrService, private ngxService: NgxUiLoaderService, private http: HttpClient) { }
responseError:any
  /*2-way data binding*/

  /*
  
  fullname:any
  email:any
  password:any


  signup(){
    console.log(this.userdetails)
  }
  */
  signup(){
    this.toastr.success('Successfully Signup') //toaster(popup like done, success)
    var temp={...this.userdetails}; // spread operator
    this.users.push(temp); //pushing values to table or array
    /*console.log(this.fullname,this.email,this.password)*/

    var url="https://apifromashu.herokuapp.com/api/register"

    this.http.post(url,this.userdetails).subscribe({

      next:(response: any)=>{

        console.log("response from users api",response)

        // this.userdetails.name=response.name,

        // this.userdetails.email=response.email,

        // this.userdetails.password=response.password

        if(response.message==="User Already Exists"){

          this.responseError="User Already Exists"

        }

      },

      error:(error)=>{

        console.log("Error from users api",error)

      }

    })

   }

  deleteUser(index:any)
  {
alert(index)
  }

  ngOnInit(): void {
    this.ngxService.start(); //start foreground spinner
    setTimeout(()=>{
      this.ngxService.stop(); //stop foreground spinner
    },1000)
  }
  }
 