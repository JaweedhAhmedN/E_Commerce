import { Routes } from '@angular/router';
import { NotFound } from './components/pages/not-found/not-found';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/common/footer/help-support/about-us/about-us';
import { Faq } from './components/common/footer/help-support/faq/faq';
import { TermsConditions } from './components/common/footer/help-support/terms-conditions/terms-conditions';
import { PrivacyPolicy } from './components/common/footer/help-support/privacy-policy/privacy-policy';
import { EWastePolicy } from './components/common/footer/help-support/e-waste-policy/e-waste-policy';

export const routes: Routes = [
    /* App Routes */
    // Footer Help-Support Routes
    {path: 'about-us', component: AboutUs},
    {path: 'faq', component: Faq},
    {path: 'terms-conditions', component: TermsConditions},
    {path: 'privacy-policy', component: PrivacyPolicy},
    {path: 'e-waste-policy', component: EWastePolicy},

    // Global Routes
    {path: '', component: Home},
    {path: '**', component: NotFound},
];
