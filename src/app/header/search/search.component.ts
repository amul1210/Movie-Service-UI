import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private DataService : DataService , private router : Router) { }

  ngOnInit() {
  }
  

  onClick(){

    var movie = document.getElementsByTagName("input");
    this.DataService.searchMovie(movie[0]['value']);
    console.log(movie[0]['value']);
    this.router.navigate(['/search/' + movie[0]['value']]);
  }

}
