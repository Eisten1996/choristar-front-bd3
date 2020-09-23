import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = null
  foobar: string = ''

  constructor(private ProfileService: ProfileService){}

  getAllUsers(){
    this.ProfileService.getAllUsers().subscribe(
      profiles => {console.log(profiles)}
    )
  }

  getUser(id: string){
    this.ProfileService.getUser(id).subscribe(
      user => {
        this.userData = user
        console.log(this.userData)
      }
    )
  }

  ngOnInit(): void {
    this.getUser("5f5d9293f4365e285f67a0b9");
  }

}
