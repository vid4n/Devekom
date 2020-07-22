import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPreduzecuComponent } from './o-preduzecu.component';

describe('OPreduzecuComponent', () => {
  let component: OPreduzecuComponent;
  let fixture: ComponentFixture<OPreduzecuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPreduzecuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPreduzecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
