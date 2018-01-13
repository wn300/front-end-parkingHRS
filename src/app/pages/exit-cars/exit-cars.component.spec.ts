import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitCarsComponent } from './exit-cars.component';

describe('ExitCarsComponent', () => {
  let component: ExitCarsComponent;
  let fixture: ComponentFixture<ExitCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
