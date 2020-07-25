import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveShowComponent } from './live-show.component';

describe('LiveShowComponent', () => {
  let component: LiveShowComponent;
  let fixture: ComponentFixture<LiveShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
