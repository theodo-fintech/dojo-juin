import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtiesSectionComponent } from './realties-section.component';

describe('RealtiesSectionComponent', () => {
  let component: RealtiesSectionComponent;
  let fixture: ComponentFixture<RealtiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtiesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
