import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Profile } from '../interfaces/profile';
import { ProfileService } from '../services/user.service';

@Component({
  selector: 'app-modal-request',
  templateUrl: './modal-request.component.html',
  styleUrls: ['./modal-request.component.css']
})
export class ModalRequestComponent implements OnInit {

  user: Profile;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: ProfileService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.data.request.user).subscribe(
      userData => {
        this.user = userData;
      }
    );
  }

}
