export interface TableHeaderColumn<T> {
  key: keyof T;
  caption: string;
}
