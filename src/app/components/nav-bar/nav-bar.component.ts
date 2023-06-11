import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  actions : Array<any> = [
    {title: "Accueil", route: "/home", icon: "house"},
    {title: "Produits", route: "/products", icon: "list-check"},
  ];

  currentAction : any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
