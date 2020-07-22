import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergetskiComponent } from './energetski.component';

describe('EnergetskiComponent', () => {
  let component: EnergetskiComponent;
  let fixture: ComponentFixture<EnergetskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergetskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergetskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
