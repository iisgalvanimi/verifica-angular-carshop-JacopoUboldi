import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  testo_salvato:string="(ancora nulla)"

  constructor() {}

  onClick(colore:HTMLInputElement, numero:HTMLInputElement, tipo:HTMLInputElement) {
    this.testo_salvato= colore.value + ", " + numero.value + ", " + tipo.value
  }


  


}