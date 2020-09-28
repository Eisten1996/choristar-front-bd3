import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientCreateComponent } from './modal-client-create.component';

describe('ModalClientCreateComponent', () => {
  let component: ModalClientCreateComponent;
  let fixture: ComponentFixture<ModalClientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClientCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
