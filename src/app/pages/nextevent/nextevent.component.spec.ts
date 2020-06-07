import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexteventComponent } from './nextevent.component';

describe('NexteventComponent', () => {
  let component: NexteventComponent;
  let fixture: ComponentFixture<NexteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexteventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
