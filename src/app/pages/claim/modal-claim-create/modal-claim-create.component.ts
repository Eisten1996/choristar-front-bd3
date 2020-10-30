import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../../../core/services/user.service';
import { User } from '../../../interfaces/user';
import { TypeClaim } from '../../../interfaces/type-claim';
import { Claim } from '../../../interfaces/claim';
import { ClaimServiceService } from '../../../core/services/claim-service.service';

@Component({
  selector: 'app-modal-claim-create',
  templateUrl: './modal-claim-create.component.html',
  styleUrls: ['./modal-claim-create.component.css']
})
export class ModalClaimCreateComponent implements OnInit {

  user: User;
  claim: Claim;
  today = new Date();
  dateClaim = this.today.getFullYear() + '-' +
    String(this.today.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.today.getDate()).padStart(2, '0');
  stateClaim = 'en proceso';
  typeClaim: TypeClaim;

  checkoutForm = this.formBuilder.group({
    dateClaim: [this.dateClaim],
    stateClaim: [this.stateClaim],
    typeClaim: ['', [Validators.required]],
    user: ['', [Validators.required, Validators.pattern(/[0-9]{9}$/), Validators.maxLength(9)]]
  });

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private claimService: ClaimServiceService) {
  }

  ngOnInit(): void {
  }


  createClaim(): void {
    this.profileService.getUserDni(this.checkoutForm.value.user).subscribe(
      user => {
        this.claim = this.checkoutForm.value;
        this.typeClaim = { claim: this.checkoutForm.value.typeClaim };
        this.claim.typeClaim = this.typeClaim;
        this.claim.user = null;
        console.log(this.claim);
        this.claimService.createClaim(this.claim, user.dni).subscribe();
      }
    );
  }
}
