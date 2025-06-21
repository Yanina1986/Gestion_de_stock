import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroproducto'
})
export class FiltroproductoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
