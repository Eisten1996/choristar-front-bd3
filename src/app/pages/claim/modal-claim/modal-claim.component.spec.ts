import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClaimComponent } from './modal-claim.component';

describe('ModalClaimComponent', () => {
  let component: ModalClaimComponent;
  let fixture: ComponentFixture<ModalClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
