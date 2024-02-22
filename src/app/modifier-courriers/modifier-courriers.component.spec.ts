import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCourriersComponent } from './modifier-courriers.component';

describe('ModifierCourriersComponent', () => {
  let component: ModifierCourriersComponent;
  let fixture: ComponentFixture<ModifierCourriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCourriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
