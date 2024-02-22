import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourriersImputesComponent } from './courriers-imputes.component';

describe('CourriersImputesComponent', () => {
  let component: CourriersImputesComponent;
  let fixture: ComponentFixture<CourriersImputesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourriersImputesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourriersImputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
