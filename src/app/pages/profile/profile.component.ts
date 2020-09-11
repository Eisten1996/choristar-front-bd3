import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private ProfileService: ProfileService
  ) { }

  getAllProfiles(){
    this.ProfileService.getAllProfiles().subscribe(
      profiles => {console.log(profiles)}
    )
  }

  ngOnInit(): void {
  }

}
