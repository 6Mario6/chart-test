import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


const ELEMENT_DATA = [
  {January : 65, February: 59, March: 80, April : 81, May: 56, June: 55, July: 40},
  {January : 65, February: 59, March: 80, April : 81, May: 56, June: 55, July: 40}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
