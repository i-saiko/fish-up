import { Pipe, PipeTransform } from '@angular/core';

import { FilterPipeModel } from './filter-pipe-model.interface';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {

  transform<T>(
    objects: T[],
    filters: FilterPipeModel<T>[],
    searchValue: string
  ): T[] {
    return objects.filter(object => filters.some(filter => filter.predicateFn(object, searchValue)));
  }
}
