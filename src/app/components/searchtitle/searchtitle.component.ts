import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {OmdbApiService} from "../../omdb-api.service";
import {IOMDBResponse} from "../../omdbresponse";

@Component({
  selector: 'app-searchtitle',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  movieData: IOMDBResponse | undefined;
  errorMessage = '';

  constructor(private _omdbApi: OmdbApiService) {
  }

  getMovieData(movieTitle: string): boolean {
    this._omdbApi.getMovieData(movieTitle).subscribe(
      movieData =>
      {
        this.movieData = movieData;
        console.log(this.movieData?.Director);
      })
    return false;
  }
}
