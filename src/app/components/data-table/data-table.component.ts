import {Router} from '@angular/router';
import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {TableHeaderColumn} from './table-header-column.interface';
import {DateService} from '../../modules/date/date.service';

@Component({
  selector: 'app-table',
  templateUrl: './data-table.html',
})
export class DataTableComponent<T> implements OnInit {

  @Input()
  tableData: T[];

  @Input()
  tableHeaderColumns: TableHeaderColumn<T>[];

  @Input() availablePaginatorLength: number;

  @ViewChild(MatPaginator)
  set paginator(paginator: MatPaginator) {
    if (this.tableDateSource.data.length > this.availablePaginatorLength) {
      this.tableDateSource.paginator = paginator;
    }
  }

  tableHeaderKeys: (keyof T)[] = [];
  tableDateSource: MatTableDataSource<T>;

  constructor(
    public dateService: DateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tableHeaderKeys = this.tableHeaderColumns.map(column => column.key);
    this.tableDateSource = new MatTableDataSource<T>(this.tableData);
  }

  navigateTo(row) {
    if (row.link) {
      this.router.navigateByUrl(row.link);
    }
  }
}
