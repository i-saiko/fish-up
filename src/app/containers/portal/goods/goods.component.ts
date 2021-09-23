import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EditGoodsDialogComponent} from './edit-goods-dialog/edit-goods-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {GoodsModel} from '../../../rest/goods.model';
import {GoodsService} from '../../../rest/goods.service';
import {GOODS_TABLE_HEADERS, GoodsTableData} from './goods-table-data';
import {Router} from '@angular/router';
import {StoragePlacesEnum} from '../../../enums/storage-places.enum';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {
  form: FormGroup;
  goods: GoodsModel[] = [];
  goodsTableData: GoodsTableData[] = [];
  goodsTableHeader = GOODS_TABLE_HEADERS;

  constructor(
    public dialog: MatDialog,
    private readonly datePipe: DatePipe,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly goodsService: GoodsService,
    private readonly toastrService: ToastrService,
  ) {
    this.form = new FormGroup({
      incomeDate: new FormControl(new Date())
    });
    this.initGoods();
    this.form.get('incomeDate').valueChanges.subscribe(res => {
      this.initGoods(res);
    });
  }

  initGoods(date?: Date) {
    this.goods = [];
    this.goodsTableData = [];
    const dateFormat = 'dd.MM.yyyy';
    this.goodsService.getAllGoods().subscribe((goods: any) => {
      goods
        .filter(item =>
          this.datePipe.transform(item.payload.doc.data()['dateCreated'], dateFormat) === this.datePipe
            .transform(date || new Date(), dateFormat))
        .map(item => {
          this.goods.push({
            ...item.payload.doc.data(),
            id: item.payload.doc.id,
          } as GoodsModel);
        });
      this.goodsTableData = this.initGoodsTableData(this.goods);
    });
  }

  initGoodsTableData(goods: GoodsModel[]) {
    return goods.map((item, i) => ({
      id: item.id,
      userName: item.userName,
      contactName: item.contactName,
      warehouse: StoragePlacesEnum[item.warehouse],
      dateCreated: item.dateCreated,
      amount: Object.values(item.goodsNames).reduce((a, b) => a + b),
    }));
  }

  openGoodsEditDialog(rowData?): void {
    const dialogRef = this.dialog.open(EditGoodsDialogComponent, {
      width: '600px',
      height: '500px',
      data: rowData?.id,
      panelClass: 'dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, rowData);
      if (result) {
        if (rowData?.id) {
          this.goodsService.updateGoods(result, rowData.id)
            .then(() => {
              this.toastrService.success('Поступление изменено');
              this.router.navigateByUrl('/goods');
            })
            .catch(() => {
              this.toastrService.error('Поступление не изменено, есть ошибки');
            });
        } else {
          this.goodsService.createGoods(result)
            .then(() => {
              this.toastrService.success('Поступление сохранено');
              this.router.navigateByUrl('/goods');
            })
            .catch(() => {
              this.toastrService.error('Поступление не сохранено, есть ошибки');
            });
        }
      }
    });
  }
}
