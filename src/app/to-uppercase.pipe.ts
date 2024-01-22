import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercasePipe'
})
export class ToUppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
