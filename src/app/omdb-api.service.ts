import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError, tap} from "rxjs";
import {IOMDBResponse} from "./omdbresponse";
import {IOMDBResponse2} from "./omdbresponse2";

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _siteURL = 'https://www.omdbapi.com/';
  private _apiKey = '?i=tt3896198&apikey=abdd1d19';
  private _apiKey2 = '?&apikey=abdd1d19&s=';
  constructor(private _http: HttpClient) { }

  getMovieData(movieTitle: string): Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(`${this._siteURL}${this._apiKey}&t=${encodeURIComponent(movieTitle)}`)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(this._siteURL + this._apiKey2 + movieName + "&page=" + page)
      .pipe(
        tap(data => console.log('Moviedata/error' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error.message || error);
    return throwError(() => new Error('An error occurred'));
  }
}
