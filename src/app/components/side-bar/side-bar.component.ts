import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  admin: User;

  constructor() {
  }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

}
