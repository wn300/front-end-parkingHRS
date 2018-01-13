import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InServiceComponent } from './in-service.component';

describe('InServiceComponent', () => {
  let component: InServiceComponent;
  let fixture: ComponentFixture<InServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
