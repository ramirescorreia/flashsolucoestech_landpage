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
      let skill = new Skill(faGlobe, "Donec ullamcorper, lorem et", 
                         "porta egestas, orci purus fermentum eros, in interdum est lorem nec nisi. Mauris a tortor quis neque volutpat bibendum.");

      let skill2 = new Skill(faRocket, "Proin id est ut magna", 
                          "Nunc comodo massa nisl, e sempre velit luctus rhoncus. Maecenas convallis nulla vitae risus aucto.");
      
      let skill3 = new Skill(faBolt, "Vestibulum dictum", 
                            "spendisse ultrices ultrices lacus id ultrices. Etiam ultrices laoreet nunc.");
      
      this.skills.push(skill);
      this.skills.push(skill2);
      this.skills.push(skill3);
    }
}
