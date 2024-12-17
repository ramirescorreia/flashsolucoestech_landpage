import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  urlWhatsApp:string;
  textoInicioConversa:string = "Olá, gostaria de fazer um orçamento para meu site."
  numeroCelularEscolhido:string;

  ngOnInit(): void {
    let numeroAleatorio:number = (Math.random() >= 0.5) ? 1 : 0;

    numeroAleatorio == 0 ? this.numeroCelularEscolhido = "5562993172731" : this.numeroCelularEscolhido = "5562993357679";

    this.urlWhatsApp = "https://api.whatsapp.com/send?phone=" + this.numeroCelularEscolhido + "&text=" + this.textoInicioConversa;
  }


}
