import {AngularFirestore} from '@angular/fire/firestore';
import {GoodsModel} from './goods.model';
import {Injectable} from '@angular/core';

@Injectable()
export class GoodsService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  getAllGoods() {
    return this.firestore.collection('goods').snapshotChanges();
  }

  getGoods() {
    return this.firestore.collection('goods').snapshotChanges();
  }

  createGoods(goods: GoodsModel) {
    return this.firestore.collection('goods').add(goods);
  }

  updateGoods(goods: GoodsModel, goodsId: string) {
    const {id, ...updatedGood} = goods;

    return this.firestore.doc('goods/' + goodsId).update(updatedGood);
  }

  deleteGoods(goodsId: string) {
    this.firestore.doc('goods/' + goodsId).delete();
  }
}
