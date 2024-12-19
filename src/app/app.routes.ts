import { Routes } from '@angular/router';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { HomeComponent } from './home/home.component';
import { TermosCondicoesComponent } from './termos-condicoes/termos-condicoes.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'termos-e-condicoes' , component: TermosCondicoesComponent},
    {path: 'politica-de-privacidade', component: PoliticaPrivacidadeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
    
];
