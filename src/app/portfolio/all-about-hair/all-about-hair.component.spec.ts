import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboutHairComponent } from './all-about-hair.component';

describe('AllAboutHairComponent', () => {
  let component: AllAboutHairComponent;
  let fixture: ComponentFixture<AllAboutHairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAboutHairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAboutHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
