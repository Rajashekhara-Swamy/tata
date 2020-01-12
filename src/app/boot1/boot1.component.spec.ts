import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boot1Component } from './boot1.component';

describe('Boot1Component', () => {
  let component: Boot1Component;
  let fixture: ComponentFixture<Boot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
