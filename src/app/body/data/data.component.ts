import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public movies ;
  constructor(private _dataservice: DataService) { }

  ngOnInit() {





    // this.sleep(10);
    // console.log(this._dataservice.letter);
    // if(this._dataservice.letter !== "a")
      this._dataservice.getAllPopularMoviesFromAPI()
      .subscribe((data) => {
        // console.log("initially the movies content is ", this.movies);
        // console.log("initially the data content is ", data);
        this.movies = data['results'];
        // console.log("the movies content is ", this.movies);
    //     // this.movies = data.results;
    //     // this.movies = data
      });
    //   else{
    //     this.movies = this._dataservice.movie;
    //     console.log(this.movies);
    //   }
    // this.movies = this._dataservice.convertJSONtoObj(this.json)
    // console.log(this.json);

    // this._dataservice.setMovies("b");
    // console.log(this._dataservice.movie);
  }

  // onClick() {
  //   this._dataservice.getAllPopularMoviesFromAPI()
  //     .subscribe(results => this.json = results);
  //   console.log(this.json);
  //   this.movies = this.json.results;
  //   console.log(this.movies);
  //   //componentRefresh();
  //   // HTMLAnchorElement x = document.getElementsByTagName("div"[0]);
  //   // if(x.style.display === "none")
  //   //   x.style.display = "block";
//  }
  }