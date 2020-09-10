import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDestinationsComponent } from './data-destinations.component';

describe('DataDestinationsComponent', () => {
  let component: DataDestinationsComponent;
  let fixture: ComponentFixture<DataDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
