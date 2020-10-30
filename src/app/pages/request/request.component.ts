import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Request } from '../../interfaces/request';
import { RequestServiceService } from '../../core/services/request-service.service';
import { ProfileService } from '../../core/services/user.service';
import { User } from '../../interfaces/user';
import { ModalRequestComponent } from './modal-request/modal-request.component';
import { ModalRequestCreateComponent } from './modal-request-create/modal-request-create.component';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  displayedColumns: string[] = ['dateRequest', 'typeRequest', 'user', 'stateRequest', 'showRequest'];
  requests: Request[];
  users: User[];

  dataSource = new MatTableDataSource<Request>(this.requests);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private requestService: RequestServiceService, private userService: ProfileService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUsers();
    this.getAllRequests();
  }

  public getUsers(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  public getDNIUser(id: string): string[] {
    return this.users.filter(user => user.id === id).map(u => u.dni);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllRequests(): void {
    const resp = this.requestService.getAllRequests();
    resp.subscribe(request => {
      this.dataSource.data = request as Request[];
    });
  }

  public getRequest(request: Request): void {
    const dialogRef = this.dialog.open(ModalRequestComponent, {
      data: { request }
    });
    dialogRef.afterClosed().subscribe((resolve) => {
      console.log(`Dialog resolve : ${resolve}`);
    });
  }

  public createRequest(): void {
    const dialogRef = this.dialog.open(ModalRequestCreateComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe((resolve) => {
      console.log(`Dialog resolve : ${resolve}`);
      // window.location.reload();
    });
  }

  public deletedRequest(request: Request): void {
    if (confirm(`Desea eliminar request ${request.typeRequest.request}`)) {
      this.requestService.deleteRequest(request.id).subscribe();
      alert(`request ${request.typeRequest.request} eliminado`);
      window.location.reload();
    }
  }

}
