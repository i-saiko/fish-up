import {Component, Inject, OnInit} from '@angular/core';
import {GoodsLogic} from '../goods.logic';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StoragePlacesEnum} from '../../../../enums/storage-places.enum';
import {Contacts} from '../../../../enums/contacts';
import {FishEnum} from '../../../../enums/fishes.enum';
import {GoodsModel} from '../../../../rest/goods.model';
import {GoodsService} from '../../../../rest/goods.service';

@Component({
  selector: 'app-detail',
  templateUrl: './edit-goods-dialog.component.html',
  styleUrls: ['./edit-goods-dialog.component.scss']
})
export class EditGoodsDialogComponent implements OnInit {
  form: FormGroup;
  storagePlacesEnum = StoragePlacesEnum;
  contacts = Contacts;
  contactGroups = Array.from(new Set(this.contacts.map(element => element.type)));
  fishEnum = FishEnum;
  isExpandCategory: boolean[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditGoodsDialogComponent>,
    private goodsLogic: GoodsLogic,
    private readonly goodsService: GoodsService,
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.initGoods(this.data);
    }
    if (!this.data) {
      this.form = this.goodsLogic.form(this.data);
    }
  }

  expandDocumentTypes(group: any): void {
    this.isExpandCategory[group] = !this.isExpandCategory[group];
  }

  initGoods(goodsId: string): void {
    this.goodsService.getAllGoods().subscribe((goods: any) => {
      goods
        .map(item => {
          if (item.payload.doc.id === goodsId) {
              this.form = this.goodsLogic.form({
                ...item.payload.doc.data(),
                id: item.payload.doc.id,
              } as GoodsModel);
          }
        });
    });
  }
}
