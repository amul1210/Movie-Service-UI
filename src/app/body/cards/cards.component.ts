import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
 selector: 'app-cards',
 templateUrl: './cards.component.html',
 styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 @Input() movie;
 @Input('value') value;

 constructor(private _dataservice: DataService) {}

 ngOnInit() {
  console.log(this.value);
  // if(this.value==="a")
  // {
  //   console.log("hello");
  //   document.getElementById("delete").style.display = "inline";
  // }
}

 //movie.id;



  movieToBeSaved = {
  "imdbId": "200",
  "movieTitle": "harrypotter",
  "rating": 5,
  "comments": "saidfjsapfgas",
  "yearOfRelease": "1234545566565",
  "posterURL":"DFHBJDSFFBHJNDFBJHFBJS"}




 onClick(){

  //console.log(this.movieToBeSaved);
  this.movieToBeSaved.imdbId = this.movie['id'];
  this.movieToBeSaved.movieTitle = this.movie['title'];
  this.movieToBeSaved.posterURL = this.movie['poster_path'];
  this.movieToBeSaved.yearOfRelease = this.movie['release_date'];
  this.movieToBeSaved.rating = this.movie['vote_average'];
  this.movieToBeSaved.comments = "sjfbhjdf";
  this._dataservice.postMovies(this.movieToBeSaved)
       .subscribe();

 }
 deleteClick(){
   this._dataservice.deleteMovie(this.movie.imdbId).subscribe();
 }

}