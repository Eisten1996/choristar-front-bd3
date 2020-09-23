import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Request} from "../../interfaces/request";
import {RequestServiceService} from "../../services/request-service.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dateRequest', 'typeRequest','user','stateRequest'];
  requests: Request[];

  dataSource = new MatTableDataSource<Request>(this.requests);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private requestService: RequestServiceService, public dialog: MatDialog) {
    
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRequests();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllRequests() {
    const resp = this.requestService.getAllRequests();
    resp.subscribe(request => {
      this.dataSource.data = request as Request[];
    });
  }


/** Builds and returns a new User. */
/* function createNewUser(id: number): UserData {
  const type = TYPE[Math.round(Math.random() * (TYPE.length - 1))] ;
  const date = DAY[Math.round(Math.random() * (DAY.length - 1))]+'/'+MONTH[Math.round(Math.random() * (MONTH.length - 1))]+'/'+YEAR[Math.round(Math.random() * (YEAR.length - 1))];


return {
  id: id.toString(),
  daterequest: date,
  typeRequest: type,
  request: "Description",
  iduser: Math.round(Math.random() * 1000+60000).toString(),
  stateRequest: STATE[Math.round(Math.random() * (STATE.length - 1))], 
  /* id: id.toString(),
  name: name,
  progress: Math.round(Math.random() * 100).toString(),
  color: COLORS[Math.round(Math.random() * (COLORS.length - 1))] 
};
 */
}
