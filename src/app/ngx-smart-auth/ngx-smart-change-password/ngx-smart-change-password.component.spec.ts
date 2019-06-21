import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartChangePasswordComponent } from './ngx-smart-change-password.component';

describe('NgxSmartChangePasswordComponent', () => {
  let component: NgxSmartChangePasswordComponent;
  let fixture: ComponentFixture<NgxSmartChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSmartChangePasswordComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
