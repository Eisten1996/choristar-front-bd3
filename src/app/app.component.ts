import { Component } from '@angular/core';
import { ProfileService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Choristar';
  flag: boolean = false;
  user: any = null;
  email: string = '';
  password: string = '';

  foobar: string = 'olo'
  
  constructor(private profileService: ProfileService){}

  ngOnInit(){}

  logingAdmin(email: string, password: string){
    this.profileService.logingAdmin(email, password).subscribe(
      user =>{
        this.user = user;        
        // console.log('User: ' + this.user.firstName);
        this.flag = true;
      },
      error => {
        alert("Usuario y/o contraseña incorrectos");
      }
    )
  }
}