import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/pages/home/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: LandingComponent }
];
