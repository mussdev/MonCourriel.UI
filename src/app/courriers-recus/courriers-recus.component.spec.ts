import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourriersRecusComponent } from './courriers-recus.component';

describe('CourriersRecusComponent', () => {
  let component: CourriersRecusComponent;
  let fixture: ComponentFixture<CourriersRecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourriersRecusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourriersRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
