import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from './services/user.service';
import { Profile } from './interfaces/profile';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choristar';
  flag = false;
  user: Profile;

  checkoutForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(/.+@.+\..+/)]],
    password: [null, [Validators.required]]
  });

  constructor(private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.flag = JSON.parse(localStorage.getItem('flag'));
  }


  loginAdmin(): void {
    const userLogin = this.checkoutForm.value;
    this.profileService.logingAdmin(userLogin.email, userLogin.password).subscribe(
      user => {
        this.user = user;
        this.flag = true;
        localStorage.setItem('flag', JSON.stringify(this.flag));
        localStorage.setItem('admin', JSON.stringify(this.user));
      },
      error => {
        alert('Usuario y/o contraseña incorrectos');
      }
    );
  }

  salir(): void {
    this.flag = !this.flag;
    localStorage.setItem('flag', JSON.stringify(this.flag));
    localStorage.clear();
    this.checkoutForm.reset();
  }
}
