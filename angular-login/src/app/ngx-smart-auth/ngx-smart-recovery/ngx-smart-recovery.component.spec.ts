import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartRecoveryComponent } from './ngx-smart-recovery.component';

describe('NgxSmartRecoveryComponent', () => {
  let component: NgxSmartRecoveryComponent;
  let fixture: ComponentFixture<NgxSmartRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSmartRecoveryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
