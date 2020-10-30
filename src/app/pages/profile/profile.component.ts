import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin: User;

  constructor() {
  }


  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

}
