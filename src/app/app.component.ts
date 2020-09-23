import {Component} from '@angular/core';
import {ProfileService} from './services/user.service'

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


  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.flag = JSON.parse(localStorage.getItem("flag"));

  }

  logingAdmin(email: string, password: string) {
    this.profileService.logingAdmin(email, password).subscribe(
      user => {
        this.user = user;
        this.flag = true;
        localStorage.setItem("flag", JSON.stringify(this.flag));
        localStorage.setItem("admin", JSON.stringify(this.user));
      },
      error => {
        alert("Usuario y/o contraseña incorrectos");
      }
    );
  }

  salir() {
    this.flag = !this.flag;
    localStorage.setItem("flag", JSON.stringify(this.flag));
    localStorage.clear();
  }
}
