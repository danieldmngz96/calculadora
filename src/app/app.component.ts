import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  numero1:number = 0;
  numero2:number = 0;

  resultado:number = 0;

  sumar():void{
    this.resultado = this.numero1+this.numero2;
  }

  resta():void{
    this.resultado = this.numero1-this.numero2;
  }

  mutipplicacion():void{
    this.resultado = this.numero1*this.numero2;
  }

  division():void{
    this.resultado = this.numero1/this.numero2;
  }

  exponente():void{
    this.resultado = this.numero1**this.numero2;
  }
}
