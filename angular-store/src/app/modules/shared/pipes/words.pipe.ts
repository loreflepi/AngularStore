import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {

  transform(value: string): string {
    let esMayuscula = true;
    const arregloPalabra = value.split('').map(iterador => {
      if(iterador === ' '){
        return iterador;
      }
      if (esMayuscula){
        iterador = iterador.toUpperCase();
      }
      else{
        iterador = iterador.toLowerCase();
      }
      esMayuscula = !esMayuscula;
      return iterador;
    }).join('');

    return arregloPalabra;
  }
}
