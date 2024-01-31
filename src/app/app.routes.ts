import { Routes } from '@angular/router';
import * as Pages from './Pages';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Pages.HomeComponent,
  },
  {
    path: 'details',
    title: 'App Details Page',
    component: Pages.DetailsComponent,
  },
];
