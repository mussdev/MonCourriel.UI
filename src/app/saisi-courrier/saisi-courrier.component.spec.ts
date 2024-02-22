import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiCourrierComponent } from './saisi-courrier.component';

describe('SaisiCourrierComponent', () => {
  let component: SaisiCourrierComponent;
  let fixture: ComponentFixture<SaisiCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisiCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisiCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
