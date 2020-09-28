import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRequestCreateComponent } from './modal-request-create.component';

describe('ModalRequestCreateComponent', () => {
  let component: ModalRequestCreateComponent;
  let fixture: ComponentFixture<ModalRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
