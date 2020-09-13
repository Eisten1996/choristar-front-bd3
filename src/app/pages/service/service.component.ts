import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Profile} from "../../interfaces/profile";
import {ProfileService} from "../../services/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'firstName', 'lastName', 'email'];
  profiles: Profile[];
  dataSource = new MatTableDataSource<Profile>(this.profiles);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllClients();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllClients() {
    let resp = this.profileService.getAllUsers();
    resp.subscribe(profile => {
      this.dataSource.data = profile as Profile[];
    });
  }


}
