import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faRocket, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-work',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit{
    skills: Array<Skill> = [];

    ngOnInit(): void {
      let skill = new Skill(faGlobe, "E-commerce", 
                         "Solução completa com carrinho de compras, meios de pagamentos e área administrativa.");

                         
      let skill2 = new Skill(faBolt, "Sites e Landing Pages", 
                          "Sites e Landing Pages responsivos, leves e com design moderno.");

      let skill3 = new Skill(faRocket, "SEO", 
                          "Tdos os nossos projetos são desenvolvidos com técnicas de SEO para melhorar o posicionamento no Google.");
      
      this.skills.push(skill);
      this.skills.push(skill2);
      this.skills.push(skill3);
    }
}
