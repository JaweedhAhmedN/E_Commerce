import { Routes } from '@angular/router';
import { NotFound } from './components/pages/not-found/not-found';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/common/footer/help-support/about-us/about-us';

export const routes: Routes = [
    {path: 'about-us', component: AboutUs},
    {path: '', component: Home},
    {path: '**', component: NotFound},
];
