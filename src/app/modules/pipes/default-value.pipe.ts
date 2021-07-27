import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue',
  pure: true
})
export class DefaultValuePipe implements PipeTransform {

  transform<T>(value: T, defaultValue: T): T {
    return value || defaultValue;
  }
}
