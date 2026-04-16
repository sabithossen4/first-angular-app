import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { About } from './layout/about/about';
import { Contact } from './layout/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
