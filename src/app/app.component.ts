import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AshuSirService } from './ashu-sir.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ashu:AshuSirService, private http:HttpClient, private ngxLoader:NgxUiLoaderService){
   
  }
  
  name='NGX-UI-LOADER';
  

  ngOnInit(){
    this.ngxLoader.start();
    this.http.get('https://api.npmjs.org/download/range/last-year/ngx-ui-loader').subscribe((res:any)=>{
    console.log(res);
    this.ngxLoader.stop();
  });
}

  title = 'DemoProject';
}
