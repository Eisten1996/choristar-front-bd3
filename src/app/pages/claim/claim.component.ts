import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ClaimServiceService } from '../../services/claim-service.service';
import { Claim } from '../../interfaces/claim';
import { ProfileService } from '../../services/user.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  displayedColumns: string[] = ['dateClaim', 'typeClaim', 'user', 'stateClaim', 'showClaim'];
  claims: Claim[];
  users: Profile[];

  dataSource = new MatTableDataSource<Claim>(this.claims);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private claimService: ClaimServiceService, private userService: ProfileService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUsers();
    this.getAllClaims();

  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getUsers() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  public getDNIUser(id: string): string[] {
    return this.users.filter(user => user.id === id).map(u => u.dni);
  }

  public getAllClaims(): void {
    const resp = this.claimService.getAllClaims();
    resp.subscribe(claim => {
      this.dataSource.data = claim as Claim[];
    });
  }

}

