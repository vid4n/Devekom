import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelekomunikacioniComponent } from './telekomunikacioni.component';

describe('TelekomunikacioniComponent', () => {
  let component: TelekomunikacioniComponent;
  let fixture: ComponentFixture<TelekomunikacioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelekomunikacioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelekomunikacioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
