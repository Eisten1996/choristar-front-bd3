import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/user.service';
import { Profile } from '../../../interfaces/profile';

@Component({
  selector: 'app-modal-client-create',
  templateUrl: './modal-client-create.component.html',
  styleUrls: ['./modal-client-create.component.css']
})
export class ModalClientCreateComponent implements OnInit {
  user: Profile;
  stateUser = {
    nameUser: 'al dia',
    description: 'cliente con pagos al dia'
  };
  typeUser = {
    nameTypeUser: 'cliente',
    description: 'cliente de choristar'
  };

  checkoutForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dni: ['', [Validators.required, Validators.pattern(/[0-9]{9}$/), Validators.maxLength(9)]],
    email: ['', [Validators.required, Validators.pattern(/.+@.+\..+/)]],
    password: ['', [Validators.required]],
    dateBirth: ['', [Validators.required]],
    stateUser: [this.stateUser],
    services: [null],
    typeUser: [this.typeUser]
  });

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

  public createClient(): void {
    this.profileService.createUser(this.checkoutForm.value).subscribe(
      user => {
        alert(`cliente ${this.checkoutForm.value.firstName} creado`);
      }
    );
  }


}
