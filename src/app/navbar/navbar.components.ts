import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AshuSirService } from "../ashu-sir.service";
import { faCake } from '@fortawesome/free-solid-svg-icons';
import { HttpHeaders } from "@angular/common/http";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.components.html',
})
export class NavbarComponent {
    projecttitle: String = "AC’s Cake"
    searchtext:any
    color:any
    length:any
    isloggedin:any
    navicon:any=faCake

    constructor(private ashuservice:AshuSirService, private router:Router)
    {
        this.isloggedin = localStorage["token"]?true:false
        if(this.isloggedin){
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
                    this.length = response.data?.length
                }
            })
        }
    }

    isAdmin:any=false

    adminUsers:any=["aychandra@teksystems.com"]


    ngDoCheck(){
        this.length = this.ashuservice.cartitems?.length
        if(localStorage["token"]){
            this.isloggedin = true
            
            if(this.adminUsers.includes(localStorage["loggedinUser"])){
                this.isAdmin=true
                
            }
        }
        else{
            this.isloggedin = false
            this.isAdmin = false
        }
    }
/* event binding */
    search(){
       /*alert(this.ashuservice.PORT)
        alert(this.searchtext)*/

        if(this.searchtext)
        this.router.navigate(["/search"], {queryParams:{q:this.searchtext}})
    
    }
    logout()
    {
        this.isloggedin=false
        localStorage.clear()
        // window.location.href = "/"
    }
}