import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, bandera: boolean = true): string {
    return (bandera)?'*'.repeat(value.length):value;
  }

}
