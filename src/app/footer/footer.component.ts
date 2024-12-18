import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

  urlWhatsAppRamiro:string;
  urlWhatsAppAndre:string;
  textoInicioConversa:string = "Olá, gostaria de fazer um orçamento para meu site."
  celularRamiro:string = "5562993172731";
  celularAndre:string = "5562993357679";

  ngOnInit(): void {
    this.urlWhatsAppRamiro = "https://api.whatsapp.com/send?phone=" + this.celularRamiro + "&text=" + this.textoInicioConversa;
    this.urlWhatsAppAndre = "https://api.whatsapp.com/send?phone=" + this.celularAndre + "&text=" + this.textoInicioConversa;
  }
}
