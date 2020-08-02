import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSkeletonComponent } from './load-skeleton.component';

describe('LoadSkeletonComponent', () => {
  let component: LoadSkeletonComponent;
  let fixture: ComponentFixture<LoadSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
