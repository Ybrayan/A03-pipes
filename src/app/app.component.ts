import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Van Helsing';

  alias: string = 'yHorS BraYAN';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.23456;

  salario: number = 2345.67;

  fecha: Date = new Date();

  activar: boolean = true;

  cambiarEstado(){
    this.activar=!this.activar;
  }

  videosUrl: string = 'https://www.youtube.com/embed/1aDhfTGkLTg';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Garritas',
    edad: 550,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }

}
