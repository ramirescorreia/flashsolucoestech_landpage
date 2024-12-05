import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  abriuMenuHamburguer:boolean = false;

  public manageMenu():void{
    this.abriuMenuHamburguer = !this.abriuMenuHamburguer;
  }

}
