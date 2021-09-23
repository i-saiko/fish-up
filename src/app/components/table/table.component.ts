import {Component, OnInit} from '@angular/core';
import {GoodsModel} from '../../rest/goods.model';
import {GoodsService} from '../../rest/goods.service';
import {TableLogic} from './table.logic';

@Component({
  selector: 'app-goods-list',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableListComponent implements OnInit {

  goods: GoodsModel[];
  goodsPage = {list: [], totalItems: 0};

  constructor(
    private goodsService: GoodsService,
    public logic: TableLogic,
  ) {}

  ngOnInit() {
    this.goodsService.getGoods().subscribe(data => {
      this.goods = data.map(e => {
        return {
          ...e.payload.doc.data() as {},
          id: e.payload.doc.id,
        } as GoodsModel;
      });
      this.goodsPage = {
        list: this.goods,
        totalItems: this.goods.length,
      };
    });
  }
}
