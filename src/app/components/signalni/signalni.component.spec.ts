import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalniComponent } from './signalni.component';

describe('SignalniComponent', () => {
  let component: SignalniComponent;
  let fixture: ComponentFixture<SignalniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
