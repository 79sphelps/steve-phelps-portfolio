import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntroComponent } from './header-intro.component';

describe('HeaderIntroComponent', () => {
  let component: HeaderIntroComponent;
  let fixture: ComponentFixture<HeaderIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
