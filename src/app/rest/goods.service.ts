import {AngularFirestore} from '@angular/fire/firestore';
import {GoodsModel} from './goods.model';
import {Injectable} from '@angular/core';

@Injectable()
export class GoodsService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  getGoods() {
    return this.firestore.collection('goods').snapshotChanges();
  }

  createGoods(goods: GoodsModel) {
    return this.firestore.collection('goods').add(goods);
  }

  updateGoods(goods: GoodsModel) {
    delete goods.id;
    this.firestore.doc('goods/' + goods.id).update(goods);
  }

  deleteGoods(goodsId: string) {
    this.firestore.doc('goods/' + goodsId).delete();
  }
}
