import {TableHeaderColumn} from '../../../components/data-table/table-header-column.interface';

export interface GoodsTableData {
  userName: string;
  contactName: string;
  warehouse: string;
  dateCreated: Date;
  amount: number;
}

export const GOODS_TABLE_HEADERS: TableHeaderColumn<GoodsTableData>[] = [
  {key: 'userName', caption: 'Приемщик'},
  {key: 'contactName', caption: 'Поставщик'},
  {key: 'warehouse', caption: 'Место поставки'},
  {key: 'dateCreated', caption: 'Дата поставки'},
  {key: 'amount', caption: 'Объем поставки'},
];
