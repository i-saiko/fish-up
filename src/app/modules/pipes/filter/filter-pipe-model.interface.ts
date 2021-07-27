export interface FilterPipeModel<T> {
  predicateFn(object: T, searchValue: string): boolean;
}
