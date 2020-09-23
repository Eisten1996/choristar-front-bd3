import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(){ }
  // constructor(private profileService: ProfileService){}

  // getAllUsers(){
  //   this.profileService.getAllUsers()
  //   .subscribe(users =>{
  //     console.log(users);
  //   })
  // }
  ngOnInit(): void {
  }

}
