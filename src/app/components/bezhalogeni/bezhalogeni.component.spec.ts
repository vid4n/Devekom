import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezhalogeniComponent } from './bezhalogeni.component';

describe('BezhalogeniComponent', () => {
  let component: BezhalogeniComponent;
  let fixture: ComponentFixture<BezhalogeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezhalogeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezhalogeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
