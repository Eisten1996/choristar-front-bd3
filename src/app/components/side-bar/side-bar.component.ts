import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  admin: Profile;

  constructor() {
  }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

}
