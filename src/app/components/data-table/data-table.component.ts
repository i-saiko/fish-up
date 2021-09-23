import {Router} from '@angular/router';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

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

  @Output() rowAction: EventEmitter<T> = new EventEmitter<T>();

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
  ) {}

  ngOnInit() {
    this.tableHeaderKeys = this.tableHeaderColumns.map(column => column.key);
    this.tableDateSource = new MatTableDataSource<T>(this.tableData);
  }

  rowClick(row) {
    this.rowAction.emit(row);
  }
}
