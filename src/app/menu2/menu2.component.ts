import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  admin: Profile;

  constructor() {
  }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

}
