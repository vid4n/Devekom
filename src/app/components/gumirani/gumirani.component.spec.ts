import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GumiraniComponent } from './gumirani.component';

describe('GumiraniComponent', () => {
  let component: GumiraniComponent;
  let fixture: ComponentFixture<GumiraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GumiraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GumiraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
