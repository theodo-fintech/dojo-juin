import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyCardComponent } from './realty-card.component';

describe('PropertyCardComponent', () => {
  let component: RealtyCardComponent;
  let fixture: ComponentFixture<RealtyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealtyCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
