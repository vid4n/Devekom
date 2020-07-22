import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoaksijalniComponent } from './koaksijalni.component';

describe('KoaksijalniComponent', () => {
  let component: KoaksijalniComponent;
  let fixture: ComponentFixture<KoaksijalniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoaksijalniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoaksijalniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
