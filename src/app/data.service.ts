import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../app/Movie';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { APIMovie } from '../app/APIMovie'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
 };

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _apiUrl: string = "https://api.themoviedb.org/3/";
  private _apiKey: string = "?api_key=258e893e44817dcbf97633ef342d0879"
  private _url: string = "http://localhost:8081/movie";
  constructor(private http: HttpClient) { }
 
 
  getMovies(): Observable<IMovie[]>{
    //console.log("hello" + this.http.get<IMovie[]>(this._url));
    return this.http.get<IMovie[]>(this._url).pipe(catchError(err => {
      console.log(err.error);
      return throwError(err.error)
    }));
  }
  postMovies(movie: IMovie): Observable<IMovie>{
    console.log(movie);
    return this.http.post<IMovie>(this._url, movie, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err.error);
          return throwError(err.error)
        }));
  }
  deleteMovie(id: string): Observable<{}>{
    const url = `${this._url}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err.error);
          return throwError(err.error)
        })
      );
  }

  getAllPopularMoviesFromAPI(): Observable<APIMovie[]>{
    //    console.log(this.http.get<APIMovie[]>(this._apiUrl));
       //console.log("hello");
       return this.http.get<APIMovie[]>(this._apiUrl + "movie/popular" + this._apiKey)
           .pipe(catchError(err => {
                 console.log(err.error);
                 return throwError(err.error)}));
    
     }


 //    https://api.themoviedb.org/3/search/movie?api_key=258e893e44817dcbf97633ef342d0879query=NaN

  searchMovie(movieName){
    //https://api.themoviedb.org/3/search/movie?api_key=258e893e44817dcbf97633ef342d0879&query=a
    console.log(this._apiUrl + "search/movie" + this._apiKey + "&query=" + movieName);
    return this.http.get<APIMovie[]>(this._apiUrl + "search/movie" + this._apiKey + "&query=" + movieName)
    .pipe(catchError(err => {
          console.log(err.error);
          return throwError(err.error)}));

  }


    //  convertJSONtoObj(myJSON){
    //    console.log(myJSON);
    //   var myObj = JSON.parse(myJSON);
    //   return myObj;
    //   }

      // movie : IMovie[]; 

      // public letter;

      // setMovies(a){

      //   this.letter = a;
      // if(a === "a")
      // { 
   
      //   console.log(this.movie);
      //   this.getMovies()
      //       .subscribe((data) => {
      //     //console.log("initially the movies content is ", this.movie);
      //     //console.log("initially the data content is ", data);
      //       this.movie = data;
      //      console.log("the movies content is ", this.movie);
      //     // this.movies = data.results;
      //     // this.movies = data
      //   });

      // }
      
   //}
 }