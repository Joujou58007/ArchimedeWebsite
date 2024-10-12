import { Routes } from '@angular/router';
import { CandidacyPageComponent } from './components/candidacy-page/candidacy-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        title: 'Home | Archimede Poly'
    },
    {
        path: 'candidacy',
        component: CandidacyPageComponent,
        title: 'Candidacy | Archimede Poly'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
