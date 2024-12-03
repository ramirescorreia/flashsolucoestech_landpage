import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from './work/work.component';
import { EvaluationComponent } from "./evaluation/evaluation.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, ContentComponent, AboutComponent, WorkComponent, EvaluationComponent, EvaluationComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
