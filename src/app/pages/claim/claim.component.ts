import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClaimServiceService } from '../../services/claim-service.service'

export interface UserData {
  id: string;
  dateclaim: string;
  typeClaim: string;
  claim: string;
  iduser: string;
  stateClaim: string;
}

const DAY: string[]  = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
const MONTH: string[]  = ['01','02','03','04','05','06','07','08','09','10'];
const YEAR: string[]  = ['2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];

const STATE: string[]  = ['CONCLUDED', 'ON HOLD'];
const TYPE: string[]  = ['URGENT', 'POSTPONABLE', 'UNKNOWN'];

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit{
  displayedColumns: string[] = ['id', 'dateclaim', 'typeClaim','iduser','stateClaim', 'claim'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
     // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users); 
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


function createNewUser(id: number): UserData {
  const type = TYPE[Math.round(Math.random() * (TYPE.length - 1))] ;
  const date = DAY[Math.round(Math.random() * (DAY.length - 1))]+'/'+MONTH[Math.round(Math.random() * (MONTH.length - 1))]+'/'+YEAR[Math.round(Math.random() * (YEAR.length - 1))]; 
  

  return {
    id: id.toString(),
    dateclaim: date,
    typeClaim: type,
    claim: "Description",
    iduser: Math.round(Math.random() * 1000+60000).toString(),
    stateClaim: STATE[Math.round(Math.random() * (STATE.length - 1))], 
    /* id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))] */
  };
}

