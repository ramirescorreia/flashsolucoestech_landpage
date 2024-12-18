import { Routes } from '@angular/router';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'politica-de-privacidade', component: PoliticaPrivacidadeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
