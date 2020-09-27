import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientComponent } from '../../modal-client/modal-client.component';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'firstName', 'lastName', 'email', 'stateUser', 'showUser'];
  profiles: Profile[];

  dataSource = new MatTableDataSource<Profile>(this.profiles);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private profileService: ProfileService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllClients();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllClients(): void {
    const resp = this.profileService.getAllUsers();
    resp.subscribe(profile => {
      this.dataSource.data = profile as Profile[];
    });
  }

  public getUser(client: Profile): void {
    const dialogRef = this.dialog.open(ModalClientComponent, {
      data: { client }
    });
    dialogRef.afterClosed().subscribe((resolve) => {
      console.log(`Dialog resolve : ${resolve}`);
    });
  }


}
