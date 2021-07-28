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
      dateCreated: [goods?.dateCreated || new Date().toISOString()],
      userName: [goods?.userName || this.userName.email],
      contactName: goods?.contactName,
      warehouse: goods?.warehouse,
      goodsNames: this.fb.group({
        fish01: [goods?.userData?.fish01 || null],
        fish02: [goods?.userData?.fish02 || null],
        fish03: [goods?.userData?.fish03 || null],
        fish04: [goods?.userData?.fish04 || null],
        fish05: [goods?.userData?.fish05 || null],
        fish06: [goods?.userData?.fish06 || null],
        fish07: [goods?.userData?.fish07 || null],
        fish08: [goods?.userData?.fish08 || null],
        fish09: [goods?.userData?.fish09 || null],
        fish10: [goods?.userData?.fish10 || null],
        fish11: [goods?.userData?.fish11 || null],
        fish12: [goods?.userData?.fish12 || null],
        fish13: [goods?.userData?.fish13 || null],
        fish14: [goods?.userData?.fish14 || null],
        fish15: [goods?.userData?.fish15 || null],
        fish16: [goods?.userData?.fish16 || null],
        fish17: [goods?.userData?.fish17 || null],
        fish18: [goods?.userData?.fish18 || null],
        fish19: [goods?.userData?.fish19 || null],
        fish20: [goods?.userData?.fish20 || null],
        fish21: [goods?.userData?.fish21 || null],
        fish22: [goods?.userData?.fish22 || null],
        fish23: [goods?.userData?.fish23 || null],
        fish24: [goods?.userData?.fish24 || null],
        fish25: [goods?.userData?.fish25 || null],
      }),
    });
  }
}
