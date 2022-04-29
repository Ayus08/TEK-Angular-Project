import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({

  selector: 'app-search',

  templateUrl: './search.component.html',

  styleUrls: ['./search.component.css']

})
export class SearchComponent implements OnInit {

  searchitems: any=[]

  constructor(private route: ActivatedRoute, private http: HttpClient) {

    var searchtext = this.route.snapshot.queryParams["q"]

    var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + searchtext

    this.http.get(url).subscribe({

      next:(response:any)=>{

        console.log("Response from api",response)

        this.searchitems = response.data  

      },

      error:(error)=>{

        console.log("Error from api",error)

      }

    })

   }



  ngOnInit(): void {

  }



}





/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AshuSirService } from '../ashu-sir.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitems:any=[]
  constructor(private route:ActivatedRoute, private ashu:AshuSirService) {
    var searchtext = this.route.snapshot.queryParams["q"]
    var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + searchtext
    this.ashu.searchCakes(url).subscribe({
      next:(response:any)=>{
          console.log("Response from search vakes api",response)
          this.searchitems = response.data
      },
      error:(error)=>{
        console.log("error from search vakes api",error)
      }
    })
   }

  ngOnInit(): void {
  }

}
*/