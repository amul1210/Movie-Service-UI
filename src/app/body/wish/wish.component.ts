import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  public movies : any[] ;
  public a ="a";
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    

    this._dataservice.getMovies()
      .subscribe((data) => {
        console.log("initially the movies content is ", this.movies);
        console.log("initially the data content is ", data);
        this.movies = data;
        console.log("the movies content is ", this.movies);
        // this.movies = data.results;
        // this.movies = data
      });

      

    // this._dataservice.getMovies()
    //       .subscribe(data=>this.movies = data);
    // console.log(this.movies);
  }

}
