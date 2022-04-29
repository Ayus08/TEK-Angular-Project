import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component(
    {
        selector: 'app-cake',
        templateUrl: './cake.components.html',
        styleUrls: ['./cake.components.css']
    }
)
export class CakeComponents{

    constructor(private router:Router,private ngxService: NgxUiLoaderService){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.cakedata)
    }
    showCakedetails(){
        this.router.navigate(['/detail', this.cakedata.cakeid])
    }
   
    ngOnInit(){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>.................",this.cakedata)
    this.ngxService.start(); //start foreground spinner
    setTimeout(()=>{
      this.ngxService.stop(); //stop foreground spinner
    },1000)
    }
   @Input() cakedata: any=[]
    /*
       @Input() name:any
       @Input() price:any
     */  
       /*
       for many inputs
       @Input() cakedata:any
       */

       /*
       cakedata:any={
       image:"assets/vanila.jfif",
       name:"Vanila",
       price:"500"
       }
       */
   }
   
