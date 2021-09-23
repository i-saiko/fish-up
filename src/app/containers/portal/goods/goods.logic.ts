import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class GoodsLogic {
  userName: Record<string, string>;

  constructor(
    readonly fb: FormBuilder,
  ) {
    this.userName = JSON.parse(localStorage.getItem('user'));
  }

  form(goods): FormGroup {
    return this.fb.group({
      id: [goods?.key || null],
      dateCreated: [goods?.dateCreated || new Date().toISOString()],
      userName: [goods?.userName || this.userName.email],
      contactName: goods?.contactName,
      warehouse: goods?.warehouse,
      goodsNames: this.fb.group({
        fish01: [goods?.goodsNames?.fish01 || null],
        fish02: [goods?.goodsNames?.fish02 || null],
        fish03: [goods?.goodsNames?.fish03 || null],
        fish04: [goods?.goodsNames?.fish04 || null],
        fish05: [goods?.goodsNames?.fish05 || null],
        fish06: [goods?.goodsNames?.fish06 || null],
        fish07: [goods?.goodsNames?.fish07 || null],
        fish08: [goods?.goodsNames?.fish08 || null],
        fish09: [goods?.goodsNames?.fish09 || null],
        fish10: [goods?.goodsNames?.fish10 || null],
        fish11: [goods?.goodsNames?.fish11 || null],
        fish12: [goods?.goodsNames?.fish12 || null],
        fish13: [goods?.goodsNames?.fish13 || null],
        fish14: [goods?.goodsNames?.fish14 || null],
        fish15: [goods?.goodsNames?.fish15 || null],
        fish16: [goods?.goodsNames?.fish16 || null],
        fish17: [goods?.goodsNames?.fish17 || null],
        fish18: [goods?.goodsNames?.fish18 || null],
        fish19: [goods?.goodsNames?.fish19 || null],
        fish20: [goods?.goodsNames?.fish20 || null],
        fish21: [goods?.goodsNames?.fish21 || null],
        fish22: [goods?.goodsNames?.fish22 || null],
        fish23: [goods?.goodsNames?.fish23 || null],
        fish24: [goods?.goodsNames?.fish24 || null],
        fish25: [goods?.goodsNames?.fish25 || null],
      }),
    });
  }
}
