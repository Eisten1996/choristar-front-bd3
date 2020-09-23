import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/user.service'
import {Profile} from "../../interfaces/profile";
import {RequestServiceService} from "../../services/request-service.service";
import {ClaimServiceService} from "../../services/claim-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  admin: Profile;
  countClient: number;
  countClaim: number;
  countRequest: number;

  constructor(private profileService: ProfileService, private requestServiceService: RequestServiceService, private claimServiceService: ClaimServiceService) {
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

    this.admin = JSON.parse(localStorage.getItem("admin"));
  }

}
