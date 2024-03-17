import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {IOMDBResponse} from "./omdbresponse";
import {OmdbApiService} from "./omdb-api.service";
import {CommonModule, NgIf} from "@angular/common";
import {SearchtitleComponent} from "./components/searchtitle/searchtitle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, SearchtitleComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
}
