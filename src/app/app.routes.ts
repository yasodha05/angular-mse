import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { AuthComponent } from './auth/auth.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ProfileComponent } from './profile/profile.component';

import { AUTH_ROUTES } from './auth/auth.routes';
// import { MUSIC_ROUTES } from './music-page/music.routes';

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'fav', component: FavPageComponent },
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
  { path: 'music', redirectTo: '/search', pathMatch: 'full' },
  { path: 'music/:id', component: MusicPageComponent },
  { path: 'artist', redirectTo: '/search', pathMatch: 'full' },
  { path: 'artist/:id', component: ArtistPageComponent},
  { path: 'profile', component: ProfileComponent}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES, { useHash: true });
