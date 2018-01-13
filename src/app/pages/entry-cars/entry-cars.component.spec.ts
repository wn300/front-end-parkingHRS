import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCarsComponent } from './entry-cars.component';

describe('EntryCarsComponent', () => {
  let component: EntryCarsComponent;
  let fixture: ComponentFixture<EntryCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
