import {
  Component, Inject,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {UserDto, UsersService} from '../../../modules/services/users.service';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {EditGoodsDialogComponent} from './edit-goods-dialog/edit-goods-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {GoodsModel} from '../../../rest/goods.model';
import {GoodsService} from '../../../rest/goods.service';

@Component({
  selector: 'app-users',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {

  incomeDate: AbstractControl;
  // userList: Observable<UserDto[]>;
  activePage = 0;
  // tableHeaders = [
  //   'id',
  //   'name',
  //   'position',
  //   'email',
  //   'phone'
  // ];
  //
  constructor(
    public dialog: MatDialog,
    private readonly goodsService: GoodsService,
  ) {
    this.incomeDate = new FormControl(new Date());
  }

  openGoodsEditDialog(): void {
    const dialogRef = this.dialog.open(EditGoodsDialogComponent, {
      width: '600px',
      panelClass: 'dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.goodsService.createGoods(result);
        this.goodsService.getGoods();
      }
    });
  }

  //
  // ngOnInit() {
  //   this.userList = this.httpService.getUsers();
  // }
  //
  // displayActivePage(activePageNumber: number) {
  //   this.activePage = activePageNumber;
  // }
}
