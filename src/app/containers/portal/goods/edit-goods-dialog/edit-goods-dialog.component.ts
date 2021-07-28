import {Component, Inject, OnInit} from '@angular/core';
import {GoodsLogic} from '../goods.logic';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StoragePlacesEnum} from '../../../../enums/storage-places.enum';
import {Contacts} from '../../../../enums/contacts';
import {FishEnum} from '../../../../enums/fishes.enum';

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
    private goodsLogic: GoodsLogic
  ) {}

  ngOnInit() {
    this.form = this.goodsLogic.form(this.data);
  }

  expandDocumentTypes(group: any) {
    this.isExpandCategory[group] = !this.isExpandCategory[group];
  }
}
