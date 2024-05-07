import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OwnedRealtiesComponent} from './owned-realties.component';

describe('AssetsComponent', () => {
  let component: OwnedRealtiesComponent;
  let fixture: ComponentFixture<OwnedRealtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnedRealtiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedRealtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
