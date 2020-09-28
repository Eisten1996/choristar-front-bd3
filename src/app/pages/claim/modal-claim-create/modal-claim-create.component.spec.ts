import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClaimCreateComponent } from './modal-claim-create.component';

describe('ModalClaimCreateComponent', () => {
  let component: ModalClaimCreateComponent;
  let fixture: ComponentFixture<ModalClaimCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClaimCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClaimCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
