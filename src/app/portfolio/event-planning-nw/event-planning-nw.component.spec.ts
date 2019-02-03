import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlanningNwComponent } from './event-planning-nw.component';

describe('EventPlanningNwComponent', () => {
  let component: EventPlanningNwComponent;
  let fixture: ComponentFixture<EventPlanningNwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPlanningNwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPlanningNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
