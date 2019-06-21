import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartComponent } from './ngx-smart.component';

describe('NgxSmartComponent', () => {
  let component: NgxSmartComponent;
  let fixture: ComponentFixture<NgxSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
