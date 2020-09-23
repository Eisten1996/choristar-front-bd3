import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/user.service';
import {Profile} from "../../interfaces/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin: Profile;
  constructor() {
  }


  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem("admin"));
  }

}
