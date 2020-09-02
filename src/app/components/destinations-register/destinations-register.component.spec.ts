import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsRegisterComponent } from './destinations-register.component';

describe('DestinationsRegisterComponent', () => {
  let component: DestinationsRegisterComponent;
  let fixture: ComponentFixture<DestinationsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
