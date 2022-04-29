import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AshuSirService } from '../ashu-sir.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  userdetails:any={
  };

  constructor(private service:AshuSirService,private toaster:ToastrService) { 
    
  }

  changepassword(){
    var url="https://apifromashu.herokuapp.com/api/recoverpassword";
    
    this.service.changepassword(url,this.userdetails).subscribe({
      next:(response:any)=>{
        console.log("response from signup api",response)
        this.toaster.success("Password Sent to your email.")
      },
      error:(error:any)=>{
        console.log("Error from singnup api",error)
      }
    })
  }

  ngOnInit(): void {
  }

}
