import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartLoginComponent } from './ngx-smart-login.component';

describe('LoginComponent', () => {
  let component: NgxSmartLoginComponent;
  let fixture: ComponentFixture<NgxSmartLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSmartLoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
