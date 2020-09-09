import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsUpdateComponent } from './destinations-update.component';

describe('DestinationsUpdateComponent', () => {
  let component: DestinationsUpdateComponent;
  let fixture: ComponentFixture<DestinationsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
