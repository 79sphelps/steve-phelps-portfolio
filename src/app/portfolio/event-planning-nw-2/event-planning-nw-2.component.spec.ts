import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlanningNw2Component } from './event-planning-nw-2.component';

describe('EventPlanningNw2Component', () => {
  let component: EventPlanningNw2Component;
  let fixture: ComponentFixture<EventPlanningNw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPlanningNw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPlanningNw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
