import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../../../interfaces/user';
import { ProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-modal-request',
  templateUrl: './modal-request.component.html',
  styleUrls: ['./modal-request.component.css']
})
export class ModalRequestComponent implements OnInit {

  user: User;

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
