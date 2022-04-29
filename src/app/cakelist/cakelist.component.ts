import { Component, OnInit } from '@angular/core';
import {AshuSirService} from '../ashu-sir.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

constructor(private ashuangular: AshuSirService, private http:HttpClient,private ngxService: NgxUiLoaderService){
  var url="https://apifromashu.herokuapp.com/api/allcakes"
  this.http.get(url).subscribe({
    next:(response:any)=>{
      console.log("Response from all cakes api",response)
      this.cakes = response.data
    },
    error:(error)=>{
      console.log("Error from all cakes api",error)
    }
  })
}

ascSort(){
  this.cakes = this.ashuangular.ascending(this.cakes)
}

descSort(){
  this.cakes = this.ashuangular.descending(this.cakes)
}




/*
  ascSort(){
    this.cakes.sort((obj1:any,obj2:any)=>{
      return obj1.price - obj2.price
    })
  }

  descSort(){
    this.cakes.sort((obj1:any,obj2:any)=>{
      return obj2.price - obj1.price
    })
  }
*/
  cakes:any=[
    /*
    special: true, for assured and bestseller type of recommendation
    
    {name:"Truffle",price:500,image:"assets/choco.jfif", special:true},

    */
   /*
   Because we are calling api through the ashu service.
   
    {name:"Truffle",price:500,image:"assets/choco.jfif"},
    {name:"strawberry",price:600,image:"assets/choco.jfif"},
    {name:"choco",price:800,image:"assets/choco.jfif"},
    {name:"fruit",price:900,image:"assets/choco.jfif"},
    */
  ]
 

  ngOnInit(): void {
    // this.ngxService.start(); //start foreground spinner
    // setTimeout(()=>{
    //   this.ngxService.stop(); //stop foreground spinner
    // },1000)
  }

}
