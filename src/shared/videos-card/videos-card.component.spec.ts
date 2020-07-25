import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCardComponent } from './videos-card.component';

describe('VideosCardComponent', () => {
  let component: VideosCardComponent;
  let fixture: ComponentFixture<VideosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
