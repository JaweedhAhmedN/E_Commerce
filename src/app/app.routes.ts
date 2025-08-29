import { Routes } from '@angular/router';
import { NotFound } from './components/pages/not-found/not-found';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/common/footer/help-support/about-us/about-us';
import { Faq } from './components/common/footer/help-support/faq/faq';
import { TermsConditions } from './components/common/footer/help-support/terms-conditions/terms-conditions';

export const routes: Routes = [
    /* App Routes */
    // Footer Help-Support Routes
    {path: 'about-us', component: AboutUs},
    {path: 'faq', component: Faq},
    {path: 'terms-conditions', component: TermsConditions},

    // Global Routes
    {path: '', component: Home},
    {path: '**', component: NotFound},
];
