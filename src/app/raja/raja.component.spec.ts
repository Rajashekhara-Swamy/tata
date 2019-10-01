import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajaComponent } from './raja.component';

describe('RajaComponent', () => {
  let component: RajaComponent;
  let fixture: ComponentFixture<RajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
