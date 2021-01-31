import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiViewerComponent } from './vaki-viewer.component';

describe('VakiViewerComponent', () => {
  let component: VakiViewerComponent;
  let fixture: ComponentFixture<VakiViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
