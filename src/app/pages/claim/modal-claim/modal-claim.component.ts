import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../../../interfaces/user';
import { ProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-modal-claim',
  templateUrl: './modal-claim.component.html',
  styleUrls: ['./modal-claim.component.css']
})
export class ModalClaimComponent implements OnInit {

  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: ProfileService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.data.claim.user).subscribe(
      userData => {
        this.user = userData;
      }
    );
  }

}
