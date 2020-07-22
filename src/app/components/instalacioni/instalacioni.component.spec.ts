import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacioniComponent } from './instalacioni.component';

describe('InstalacioniComponent', () => {
  let component: InstalacioniComponent;
  let fixture: ComponentFixture<InstalacioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
