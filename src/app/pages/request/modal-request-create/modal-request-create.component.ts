import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Profile } from '../../../interfaces/profile';
import { ProfileService } from '../../../services/user.service';
import { TypeRequest } from '../../../interfaces/type-request';
import { RequestServiceService } from '../../../services/request-service.service';
import { Request } from '../../../interfaces/request';

@Component({
  selector: 'app-modal-request-create',
  templateUrl: './modal-request-create.component.html',
  styleUrls: ['./modal-request-create.component.css']
})
export class ModalRequestCreateComponent implements OnInit {

  user: Profile;
  request: Request;
  today = new Date();
  dateRequest = this.today.getFullYear() + '-' +
    String(this.today.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.today.getDate()).padStart(2, '0');
  stateRequest = 'en proceso';
  typeRequest: TypeRequest;

  checkoutForm = this.formBuilder.group({
    dateRequest: [this.dateRequest],
    stateRequest: [this.stateRequest],
    typeRequest: ['', [Validators.required]],
    user: ['', [Validators.required, Validators.pattern(/[0-9]{9}$/), Validators.maxLength(9)]]
  });

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService,
              private requestServiceService: RequestServiceService) {
  }

  ngOnInit(): void {
  }


  createClaim(): void {
    this.profileService.getUserDni(this.checkoutForm.value.user).subscribe(
      user => {
        this.request = this.checkoutForm.value;
        this.typeRequest = { request: this.checkoutForm.value.typeRequest };
        this.request.typeRequest = this.typeRequest;
        this.request.user = null;
        console.log(this.request);
        this.requestServiceService.createRequest(this.request, user.dni).subscribe();
      }
    );
  }

}
