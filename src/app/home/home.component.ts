import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ContentComponent } from '../content/content.component';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { FooterComponent } from '../footer/footer.component';
import { ArgumentosComponent } from '../argumentos/argumentos.component';

@Component({
  selector: 'app-home',
  imports: [
    MenuComponent, 
    ContentComponent, 
    AboutComponent, 
    WorkComponent,
    ArgumentosComponent,
    FooterComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
