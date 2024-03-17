import { Routes } from '@angular/router';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from "./components/search/search.component";

export const routes: Routes = [
  { path: '', component: SearchtitleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent},
];
