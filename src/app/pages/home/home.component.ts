import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/user.service';
import { User } from '../../interfaces/user';
import { RequestServiceService } from '../../core/services/request-service.service';
import { ClaimServiceService } from '../../core/services/claim-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  admin: User;
  countClient: number;
  countClaim: number;
  countRequest: number;

  constructor(private profileService: ProfileService,
              private requestServiceService: RequestServiceService,
              private claimServiceService: ClaimServiceService) {
  }

  ngOnInit(): void {
    this.profileService.getAllUsers().subscribe(clients => {
      this.countClient = clients.length;
    });
    this.requestServiceService.getAllRequests().subscribe(request => {
      this.countRequest = request.length;
    });
    this.claimServiceService.getAllClaims().subscribe(claim => {
      this.countClaim = claim.length;
    });

    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

}
