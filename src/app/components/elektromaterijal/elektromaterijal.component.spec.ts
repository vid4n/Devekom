import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektromaterijalComponent } from './elektromaterijal.component';

describe('ElektromaterijalComponent', () => {
  let component: ElektromaterijalComponent;
  let fixture: ComponentFixture<ElektromaterijalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElektromaterijalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElektromaterijalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
