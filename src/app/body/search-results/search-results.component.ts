import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  

  public movie ;
  public movies : any[] ;

  constructor(private _dataservice : DataService ,  private route: ActivatedRoute) { }


  getMovie(): void {
  this.route.params.subscribe(params => this.movie =params);
  }

  ngOnInit() {

    this.getMovie();
    console.log(this.movie);
    this._dataservice.searchMovie(this.movie['movie'])
      .subscribe((data) => {
       // console.log("initially the movies content is ", this.movies);
        //console.log("initially the data content is ", data);
        this.movies = data['results'];
        console.log("the movies content is ", this.movies);
        // this.movies = data.results;
        // this.movies = data
      });
    //console.log(this.movies);

  }

}

