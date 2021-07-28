import {StoragePlacesEnum} from '../enums/storage-places.enum';

export class GoodsNames {
  fish01: number;
  fish02: number;
  fish03: number;
  fish04: number;
  fish05: number;
  fish06: number;
  fish07: number;
  fish08: number;
  fish09: number;
  fish10: number;
  fish11: number;
  fish12: number;
  fish13: number;
  fish14: number;
  fish15: number;
  fish16: number;
  fish17: number;
  fish18: number;
  fish19: number;
  fish20: number;
  fish21: number;
  fish22: number;
  fish23: number;
  fish25: number;
}

export class GoodsModel {
  id?: string;
  userName: string;
  dateCreated: Date;
  contactName: string;
  warehouse: StoragePlacesEnum;
  goodsNames: GoodsNames;
}
