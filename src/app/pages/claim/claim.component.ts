import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClaimServiceService } from '../../services/claim-service.service'
import {Claim} from "../../interfaces/claim";
import {MatDialog} from "@angular/material/dialog";
/* import {ModalClientComponent} from "../../modal-client/modal-client.component"; */


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit{
  displayedColumns: string[] = ['id', 'dateClaim', 'typeClaim','user','stateClaim'];
  claims: Claim[];

  dataSource = new MatTableDataSource<Claim>(this.claims);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private claimService: ClaimServiceService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllClaims();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllClaims() {
    const resp = this.claimService.getAllClaims();
    resp.subscribe(claim => {
      this.dataSource.data = claim as Claim[];
    });
  }

 /*  public getUser(client: Claim) {
    console.log(client);
    let dialogRef = this.dialog.open(ModalClientComponent, {
      data: {client},
    });
    dialogRef.afterClosed().subscribe((resolve) => {
      console.log(`Dialog resolve : ${resolve}`);
    });
  } */



  /* function createNewUser(id: number): UserData {
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
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))] 
  };*/
} 

