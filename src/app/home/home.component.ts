import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ContentComponent } from '../content/content.component';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    MenuComponent, 
    ContentComponent, 
    AboutComponent, 
    WorkComponent, 
    EvaluationComponent, 
    EvaluationComponent,
    FooterComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
