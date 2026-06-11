import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { About } from './layout/about/about';
import { Contact } from './layout/contact/contact';
import { Blog } from './blog/blog';
import { EducationPage } from './features/pages/education-page/education-page';

export const routes: Routes = [
    { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: 'education', component: EducationPage },
];
