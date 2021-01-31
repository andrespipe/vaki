import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiCollectorComponent } from './vaki-collector.component';

describe('VakiCollectorComponent', () => {
  let component: VakiCollectorComponent;
  let fixture: ComponentFixture<VakiCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
