import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeEnum'
})
export class NormalizeEnumPipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.split('').map(letter => letter === '_' ? ' ' : letter.toLowerCase());
    return arr.join('').replace(/\b[a-z]/g, match => match.toUpperCase());
  }
}
