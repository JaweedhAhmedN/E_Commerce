import { Routes } from '@angular/router';
import { NotFound } from './components/pages/not-found/not-found';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: '**', component: NotFound},
];
